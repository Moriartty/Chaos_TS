import {ExTable} from 'components/index';
import { connect } from 'react-redux';
import action from 'actions/fieldTranslation';
import {Divider,Popconfirm,Button} from 'antd';
import * as React from 'react';
import { _Object } from 'customInterface';
import { FormattedMessage, injectIntl } from 'react-intl';
import { lang } from 'moment';

interface CompProps {
    loading?:boolean, 
    list?:any, 
    pageNo?:number, 
    dataCount?:number, 
    searchParams?:_Object, 
    onPageChange?:Function, 
    onPageSizeChange?:Function,
    handleEdit?:Function,
    handleDelete?:Function,
    isBatchDelState?:boolean,
    onBatch?:Function,
    operations?:Array<string>,
    systemList?:Array<_Object>,
    langList?:Array<_Object>
}
interface CompState {
    selectedRowKeys:Array<any>
}

class Table extends React.Component<CompProps,CompState> {
    private columns:Array<_Object>;
    constructor (props:CompProps) {
        super(props);
        this.state = {
            selectedRowKeys: []
        }
    }
    onSelectChange = (selectedRowKeys:Array<any>) => {
        this.setState({selectedRowKeys});
    };
    onBatchDel = () => {
        this.props.onBatch(this.state.selectedRowKeys);
    }
    onCancel = () => {
        this.setState({selectedRowKeys:[]});
    }
    render () {
        const { loading, list, pageNo, dataCount, searchParams, onPageChange, onPageSizeChange,isBatchDelState,operations,systemList,langList } = this.props;
        const {selectedRowKeys} = this.state;
        const paginationOptions = { pageNo, pageSize: searchParams.pageSize, dataCount, onPageChange, onPageSizeChange };
        let rowSelection;
        this.columns = [
            { title: 'strKey', dataIndex: 'strKey' },
            { title: 'strVal', dataIndex:'strVal'},
            { title: 'system', dataIndex:'systemId',render:(value:number)=>{
                return systemList.find((o:_Object)=>o.oid===value).name
            }},
            { title: 'language', dataIndex:'language',render:(value:number)=>{
                return langList.find((o:_Object)=>o.id===value).name
            }},
        ];
        if(isBatchDelState){
            rowSelection = {
                selectedRowKeys,
                onChange: this.onSelectChange,
            };
        }else{
            this.columns.push( {
                title:'Action',dataIndex:'',key:'',render:(data:_Object)=>{
                    return (
                        <span>
                            {
                                operations.indexOf('fieldTranslation_operation_modify')>-1&&
                                <a href={'javascript:;'} onClick={this.props.handleEdit.bind(this,data)}>
                                    <FormattedMessage id={'fieldTranslation_operation_modify'}/></a>
                            }
                            {
                                operations.indexOf('fieldTranslation_operation_delete')>-1&&
                                <React.Fragment>
                                    <Divider type={'vertical'}/>
                                    <Popconfirm
                                        title={'确认删除？'}
                                        onConfirm={(e)=>{ e.stopPropagation();this.props.handleDelete(data.id)}}
                                        onCancel={(e)=>e.stopPropagation()}
                                    >
                                        <a href={'javascript:;'} onClick={(e)=>{e.stopPropagation()}}>
                                            <FormattedMessage id={'fieldTranslation_operation_delete'}/></a>
                                    </Popconfirm>
                                </React.Fragment>
                            }
                        </span>
                    )
                }
            });
        }
        return (
            <ExTable
                {...paginationOptions}
                loading={loading}
                columns={this.columns}
                rowKey={'id'}
                rowSelection={rowSelection}
                dataSource={list}
                expandRowByClick={true}
                expandedRowRender={(record:_Object) => {
                    return (
                        <React.Fragment>
                            {
                                this.columns.slice(0,this.columns.length-1).map(o=>
                                    <p className={o.title} key={o.title}><b>{o.title}</b> : {record[o.title]}</p>
                                )
                            }
                        </React.Fragment>
                    )
                }}
            />
        );
    }
}
//这里有一个需要注意的问题，关于HOC组件使用ref无法获得真实组件的问题，添加withRef
let TableComp = connect((state:any) => {
    const {langList} = state['app'];
    const operations = state.app.menuObj['systemConfig/fieldTranslation'].functions;
    const { loading, list, page, searchParams,systemList } = state['fieldTranslation'];
    return { loading, list, ...page, searchParams,operations,langList,systemList };
}, dispatch => ({
    onPageSizeChange ( pageSize:number) {
        dispatch({ type: 'FIELDTRANS_SEARCHPARAM', params: { pageSize } });
    },
    /**
     * 换页
     * @param pageNo
     */
    onPageChange (pageNo:number) {
        dispatch(action.loadFieldsData(pageNo));
    },
    handleEdit(data:_Object,e:any){
        e.stopPropagation();
        dispatch({type:'FIELDTRANS_EDITMODAL_SHOW',show:true});
        dispatch({type:'FIELDTRANS_EDITMODAL_DATA',data:data});
    },
    handleDelete(id:number){
        dispatch(action.delete(id));
    },
    onBatch(keys:Array<number>){
        dispatch(action.batchDelete(keys))
    }
}), null, {withRef: true})(Table);
export default TableComp;
