import {ExTable} from 'components/index';
import { connect } from 'react-redux';
import action from 'actions/track';
import {Divider,Popconfirm,Button} from 'antd';
import * as React from 'react';
import { _Object } from 'customInterface';

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
    onBatch?:Function
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
        const { loading, list, pageNo, dataCount, searchParams, onPageChange, onPageSizeChange,isBatchDelState } = this.props;
        const {selectedRowKeys} = this.state;
        const paginationOptions = { pageNo, pageSize: searchParams.pageSize, dataCount, onPageChange, onPageSizeChange };
        let rowSelection;
        this.columns = [
            { title: 'eventId', dataIndex: 'eventId'},
            { title: 'eventType', dataIndex: 'eventType'},
            { title: 'insertDate', dataIndex: 'insertDate'},
            { title: 'param', dataIndex: 'param'},
            { title: 'paramDescribe', dataIndex: 'paramDescribe'},
            { title: 'trackType', dataIndex:'trackType'},
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
                            <a href={'javascript:;'} onClick={this.props.handleEdit.bind(this,data)}>Edit</a>
                            <Divider type={'vertical'}/>
                            <Popconfirm
                                title={'确认删除？'}
                                onConfirm={(e)=>{ e.stopPropagation();this.props.handleDelete(data.id)}}
                                onCancel={(e)=>e.stopPropagation()}
                            >
                                <a href={'javascript:;'} onClick={(e)=>{e.stopPropagation()}}>Delete</a>
                            </Popconfirm>
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
    const { trackInfo_loading:loading, trackInfo_list:list, trackInfo_page:page, trackInfo_searchParams:searchParams } = state['track'];
    return { loading, list, ...page, searchParams };
}, dispatch => ({
    onPageSizeChange ( pageSize:number) {
        dispatch({ type: 'TRACK_INFO_SEARCHPARAM', params: { pageSize } });
    },
    /**
     * 换页
     * @param pageNo
     */
    onPageChange (pageNo:number) {
        dispatch(action.loadTrackInfo(pageNo));
    },
    handleEdit(data:_Object,e:any){
        e.stopPropagation();
        dispatch({type:'TRACK_INFO_EDITMODAL_SHOW',show:true});
        dispatch({type:'TRACK_INFO_EDITMODAL_DATA',data:data});
    },
    handleDelete(id:number){
        dispatch(action.deleteTrackInfo(id));
    },
    onBatch(keys:Array<number>){
        dispatch(action.batchDeleteTrackInfo(keys))
    }
}), null, {withRef: true})(Table);
export default TableComp;
