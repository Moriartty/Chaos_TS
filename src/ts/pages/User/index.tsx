import { connect } from 'react-redux';
import action from 'actions/user';
import roleAction from 'actions/role';
import OrgTree from './OrgTree';
import Table from './Table';
import OrgEditModal from './OrgEditModal';
import UserEditModal from './UserEditModal';
import DetailModal from './DetailModal';
import Toolbar from './Toolbar';
import * as React from 'react';
import 'less/user';
import { _Object } from 'customInterface';
import operations from 'config/language/zhCN/chaos/operations';

interface CompProps {
    init:Function,
    onLeave:Function,
    onEdit:Function,
    onUserInfoShow:Function,
    operations:Array<string>
}

class User extends React.Component<CompProps> {
    componentWillMount () {
        this.props.init();
    }

    componentWillUnmount () {
        this.props.onLeave();
    }

    render () {
        const {onEdit,onUserInfoShow,operations} = this.props;
        return (
            <div className="user">
                <OrgEditModal/>
                <UserEditModal/>
                <DetailModal/>
                <Toolbar/>
                <div className="display-flex">
                    <OrgTree/>
                    <div className="flex-grow-1">
                        <Table onEdit={onEdit} onUserInfoShow={onUserInfoShow} operations={operations}/>
                    </div>
                </div>
            </div>
        );
    }
}

const UserComp = connect((state:any)=>{
    const operations = state.app.menuObj['systemConfig/user'].functions;
    return {operations}
}, dispatch => ({
    init () {
        // 加载组织树
        dispatch(action.loadOrgData()).then((treeData:any) => {
            // 默认选择第一个组织
            dispatch(action.selectOrg(treeData[0].id));
        });
        // 加载角色列表
        dispatch(roleAction.loadList());
    },
    onLeave () {
        dispatch({ type: 'USER_PAGE_LEAVE' });
    },
    onEdit(data:_Object,e:any){
        e.stopPropagation();
        dispatch({type:'USER_EDIT',data});
    },
    onUserInfoShow(data:any,e:any){
        e.stopPropagation();
        dispatch({type:'USER_INFO_LOAD',data});
        dispatch({type:'USER_INFO_SHOW',show:true});
    }
}))(User);

module.exports = UserComp;
