import { connect } from 'react-redux';
import action from 'actions/user';
import ExTable from 'components/ExTable';
import * as React from 'react';
import { _Object } from 'customInterface';
import {Divider} from 'antd';
import {FormattedMessage} from 'react-intl';

interface CompProps {
    loading?:boolean, 
    userPageList?: Array<any>, 
    pageNo?: number, 
    pageSize?:number,
    dataCount?:any, 
    searchParams?:_Object, 
    onRowClick?:Function, 
    onPageChange?:Function, 
    onPageSizeChange?:Function,
    onUserInfoShow?:Function,
    onEdit?:Function,
    operations?:Array<string>
}

class Table extends React.Component<CompProps> {
    columns:Array<Object>;
    constructor (props:CompProps) {
        super(props);
        const {operations,onUserInfoShow,onEdit} = props;
        this.columns = [
            { title: '账号', dataIndex: 'username'},
            { title: '姓名', dataIndex: 'name' },
            { title: '性别', dataIndex: 'sex' },
            { title: '手机', dataIndex: 'phone' },
            { title: '角色', dataIndex: 'role' },
            { title: '组织', dataIndex: 'org' },
            { title: '操作', render:(value:any, data:any) => {
                let actions:Array<any> = [];
                actions.push(<a key="b1" onClick={onUserInfoShow.bind(this, data)}><FormattedMessage id={'user_operation_view'}/></a>);
                if (operations.include('user_operation_modify')) {
                    actions.push(<a key="b2" onClick={onEdit.bind(this, data)}><FormattedMessage id={'user_operation_modify'}/></a>);
                }
                return <div>{actions.joinItem((i:any) => <Divider key={i} type="vertical"/>)}</div>;
            }}
        ];
    }

    render () {
        const { loading, userPageList: list,  pageNo, dataCount,pageSize, searchParams, onRowClick, onPageChange, onPageSizeChange } = this.props;
        const paginationOptions = { pageSize, pageNo, dataCount, onPageChange, onPageSizeChange };
        return (
            <ExTable {...paginationOptions}
                loading={loading}
                columns={this.columns}
                onRow={(record:_Object) => ({ onClick: onRowClick.bind(this, record.id) })}
                dataSource={list}/>
        );
    }
}

const TableComp = connect((state:any) => {
    const operations = state.app.menuObj['systemConfig/user'].functions;
    const { userPageList, page, searchParams, loading } = state['user'];
    return { userPageList, ...page, searchParams, loading,operations };
}, dispatch => ({
    onPageSizeChange (current:any, pageSize:number) {
        dispatch({ type: 'USER_SEARCH_PARAMS', params: { pageSize } });
        dispatch(action.loadUserPage(undefined, current));
    },
    /**
     * 换页
     * @param pageNo
     */
    onPageChange (pageNo:number) {
        dispatch(action.loadUserPage(undefined, pageNo));
    },
    /**
     * 点击每行用户信息
     * @param id
     */
    onRowClick (id:number) {
        dispatch({ type: 'USER_INFO_SHOW', show: true });
        dispatch(action.loadUserInfo(id));
    },
    onEdit(data:_Object,e:any){
        e.stopPropagation();
        dispatch({type:'USER_EDIT',data});
    },
    onUserInfoShow(data:any,e:any){
        e.stopPropagation();
        dispatch({type:'USER_INFO_SHOW',show:true});
    }
}))(Table);

export default TableComp;
