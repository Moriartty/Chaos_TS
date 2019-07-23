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
    handleDelete?:Function
}

class Table extends React.Component<CompProps> {
    private columns:Array<_Object>;
    constructor (props:CompProps) {
        super(props);
        this.columns = [
            { title: 'name', dataIndex: 'name' },
            { title: 'trackId', dataIndex:'trackId'},
            {
                title:'Action',dataIndex:'',key:'',render:(data:_Object)=>{
                    return (
                        <span>
                            <a href={'javascript:;'} onClick={this.props.handleEdit.bind(this,data)}>Edit</a>
                            <Divider type={'vertical'}/>
                            <Popconfirm
                                title={'确认删除？'}
                                onConfirm={()=>this.props.handleDelete(data.id)}
                                onCancel={(e)=>e.stopPropagation()}
                            >
                                <a href={'javascript:;'} onClick={(e)=>{e.stopPropagation()}}>Delete</a>
                            </Popconfirm>
                        </span>
                    )
                }
            }
        ];
    }
    render () {
        const { loading, list, pageNo, dataCount, searchParams, onPageChange, onPageSizeChange } = this.props;
        const paginationOptions = { pageNo, pageSize: searchParams.pageSize, dataCount, onPageChange, onPageSizeChange };
        return (
            <ExTable
                {...paginationOptions}
                loading={loading}
                columns={this.columns}
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
const TableComp = connect((state:any) => {
    const { loading, list, page, searchParams } = state['track'];
    return { loading, list, ...page, searchParams };
}, dispatch => ({
    onPageSizeChange ( pageSize:number) {
        dispatch({ type: 'OGC_SEARCHPARAM', params: { pageSize } });
    },
    /**
     * 换页
     * @param pageNo
     */
    onPageChange (pageNo:number) {
        dispatch(action.loadList(pageNo));
    },
    handleEdit(data:_Object,e:any){
        e.stopPropagation();
        dispatch({type:'OGC_EDITMODAL_SHOW',show:true});
        dispatch({type:'OGC_EDITMODAL_DATA',data:data});
    },
    handleDelete(id:number,e:any){
        e.stopPropagation();
    }
}))(Table);
export default TableComp;
