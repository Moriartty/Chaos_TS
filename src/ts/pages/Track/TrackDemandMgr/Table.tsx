import {ExTable} from 'components/index';
import { connect } from 'react-redux';
import action from 'actions/track';
import {Divider,Popconfirm,Button, Tag} from 'antd';
import * as React from 'react';
import { _Object } from 'customInterface';
import { FormattedMessage, injectIntl } from 'react-intl';

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
    handleAddInfo?:Function,
    isBatchDelState?:boolean,
    onBatch?:Function,
    handleVerify?:Function,
    verifyStates?:Array<_Object>,
    operations?:Array<any>
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
        const { loading, list, pageNo, dataCount, searchParams, onPageChange, onPageSizeChange,isBatchDelState,verifyStates,operations } = this.props;
        const {selectedRowKeys} = this.state;
        const paginationOptions = { pageNo, pageSize: searchParams.pageSize, dataCount, onPageChange, onPageSizeChange };
        let rowSelection;
        this.columns = [
            { title: 'name', dataIndex: 'name' },
            { title: 'state', dataIndex:'state',render:(data:_Object)=>{
                const verifyInfo = verifyStates.find(o=>o.state==data);
                return <Tag color={verifyInfo.tagColor}>{verifyInfo.stateMsg}</Tag>
            }},
            { title:'testPath',dataIndex:'testPath'},
            { title: 'trackType', dataIndex:'trackType'},
            { title: 'description', dataIndex:'description'},
        ];
        if(isBatchDelState){
            rowSelection = {
                selectedRowKeys,
                onChange: this.onSelectChange,
            };
        }else{
            this.columns.push( {
                title:'Action',dataIndex:'',key:'',render:(data:_Object)=>{
                    let _opt = [];
                    if(~~data.state===0&&operations.indexOf('trackDemand_operation_verify')>-1)
                            _opt.push(<a href={"javascript:;"} key={'verify'} onClick={this.props.handleVerify.bind(this,data)}><FormattedMessage id="trackDemand_operation_verify"/></a>);
                    if(~~data.state===0&&operations.indexOf('trackDemand_operation_modify')>-1)
                            _opt.push(<a href={"javascript:;"} key={'modify'} onClick={this.props.handleEdit.bind(this,data)}><FormattedMessage id="trackDemand_operation_modify"/></a>);
                    if(~~data.state===1&&operations.indexOf('trackDemand_operation_addInfo')>-1)
                        _opt.push(<a href={"javascript:;"} key={'addInfo'} onClick={this.props.handleAddInfo.bind(this,data.id)}><FormattedMessage id="trackDemand_operation_addInfo"/></a>)
                    return (
                        <span>
                            
                            {
                                _opt.joinItem((i:any) => <Divider key={i} type="vertical"/>)
                            }
                            
                            {/* <Divider type={'vertical'}/>
                            <Popconfirm
                                title={'确认删除？'}
                                onConfirm={(e)=>{ e.stopPropagation();this.props.handleDelete(data.id)}}
                                onCancel={(e)=>e.stopPropagation()}
                            >
                                <a href={'javascript:;'} onClick={(e)=>{e.stopPropagation()}}>Delete</a>
                            </Popconfirm> */}
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
    const operations = state.app.menuObj['track/trackDemand'].functions;
    const { trackDemand_loading:loading, trackDemand_list:list, trackDemand_page:page, trackDemand_searchParams:searchParams,verifyStates } = state['track'];
    return { loading, list, ...page, searchParams,verifyStates,operations };
}, dispatch => ({
    onPageSizeChange ( pageSize:number) {
        dispatch({ type: 'TRACK_DEMAND_SEARCHPARAM', params: { pageSize } });
    },
    /**
     * 换页
     * @param pageNo
     */
    onPageChange (pageNo:number) {
        dispatch(action.loadTrackDemand(pageNo));
    },
    handleVerify(data:_Object,e:any){
        e.stopPropagation();
        dispatch({type:'TRACK_DEMAND_VERIFYMODAL_SHOW',show:true});
        dispatch({type:'TRACK_DEMAND_EDITMODAL_DATA',data:data});
    },
    handleEdit(data:_Object,e:any){
        e.stopPropagation();
        dispatch({type:'TRACK_DEMAND_EDITMODAL_SHOW',show:true});
        dispatch({type:'TRACK_DEMAND_EDITMODAL_DATA',data:data});
    },
    handleDelete(id:number){
        dispatch(action.deleteTrackDemand(id));
    },
    handleAddInfo(demandId:number,e:any){
        e.stopPropagation();
        dispatch({type:'TRACK_DEMAND_ADDINFOMODAL_SHOW',show:true});
        dispatch({type:'TRACK_DEMAND_ADDINFOMODAL_DATA',data:{demandId}});
    },
    onBatch(keys:Array<number>){
        dispatch(action.batchDeleteTrackDemand(keys))
    }
}), null, {withRef: true})(Table);
export default TableComp;
