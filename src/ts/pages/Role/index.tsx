import { connect } from 'react-redux';
import action from 'actions/role';
import { Button, Popconfirm, Icon } from 'antd';
import EditModal from './EditModal';
import RoleList from './RoleList';
import RoleMenu from './RoleMenu';
import { FormattedMessage } from 'react-intl';
import * as React from 'react';
import 'less/role';
import { _Object } from 'customInterface';

interface CompProps {
    init?:Function,
    onLeave?:Function,
    operations?:any, 
    roleInfo?: _Object, 
    onAdd?:Function, 
    onEdit?:Function, 
    onDelete?:Function
}

class Role extends React.Component<CompProps> {
    componentWillMount () {
        this.props.init();
    }

    componentWillUnmount () {
        this.props.onLeave();
    }

    render () {
        const { operations, roleInfo: role, onAdd, onEdit, onDelete } = this.props;
        return (
            <div className="page-component">
                <EditModal/>
                <div className="role-left">
                    {
                        operations.indexOf('role_operation_add') >= 0 && (
                            <div className="text-center">
                                <Button onClick={()=>onAdd()} type="primary" icon="plus"><FormattedMessage id={'role_operation_add'}/></Button>
                            </div>
                        )
                    }
                    <RoleList/>
                </div>
                {
                    role.id ? (
                        <div className="role-right">
                            <div className="header">
                                <div className="desc"><span className="am-badge">角色描述</span>：{role.desc}</div>
                                {
                                    !['系统管理员'].include(role.name) && (
                                        <div className="actions">
                                            {
                                                operations.indexOf('role_operation_modify') >= 0 && <Button ghost size="small" shape="circle" onClick={onEdit.bind(this, role)} icon="edit" type="primary" className="margin-right-sm"/>
                                            }
                                            {
                                                operations.indexOf('role_operation_delete') >= 0 && (
                                                    <Popconfirm placement="left" title="确定删除该角色？" onConfirm={onDelete.bind(this, role.id)}>
                                                        <Button ghost size="small" shape="circle" icon="delete" type="danger"/>
                                                    </Popconfirm>
                                                )
                                            }
                                        </div>
                                    )
                                }
                            </div>
                            <RoleMenu/>
                        </div>
                    ) : (
                        <div className="role-right">
                            <h1 className="text-center" style={{ lineHeight: 10 }}>
                                <Icon type="arrow-left"/> <FormattedMessage id={'textName_systemConfig_role_msg1'}/>
                            </h1>
                        </div>
                    )
                }
            </div>
        );
    }
}

const RoleComp = connect((state:any) => {
    const operations = state.app.menuObj['systemConfig/role'].functions;
    const { roleInfo } = state.role;
    return { operations, roleInfo };
}, dispatch => ({
    init () {
        dispatch(action.loadList());
        dispatch(action.loadMenuTree());
    },
    onLeave () {
        dispatch({ type: 'ROLE_PAGE_LEAVE' });
    },
    /**
     * 添加角色
     */
    onAdd () {
        dispatch({ type: 'ROLE_ADD' });
    },
    /**
     * 修改角色
     * @param item
     */
    onEdit (item:any) {
        dispatch({ type: 'ROLE_EDIT', data: item });
    },
    /**
     * 删除角色
     * @param id
     */
    onDelete (id:number) {
        dispatch(action.deleteRole(id));
    }
}))(Role);

module.exports = RoleComp;
