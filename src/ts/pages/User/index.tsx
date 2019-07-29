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

interface CompProps {
    init:Function,
    onLeave:Function
}

class User extends React.Component<CompProps> {
    componentWillMount () {
        this.props.init();
    }

    componentWillUnmount () {
        this.props.onLeave();
    }

    render () {
        return (
            <div className="user">
                <OrgEditModal/>
                <UserEditModal/>
                <DetailModal/>
                <Toolbar/>
                <div className="display-flex">
                    <OrgTree/>
                    <div className="flex-grow-1">
                        <Table/>
                    </div>
                </div>
            </div>
        );
    }
}

const UserComp = connect(null, dispatch => ({
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
}))(User);

module.exports = UserComp;
