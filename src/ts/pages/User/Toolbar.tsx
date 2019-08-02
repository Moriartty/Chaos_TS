import { connect } from 'react-redux';
import action from 'actions/user';
import { Row, Col, Button, Input, Icon } from 'antd';
import { FormattedMessage } from 'react-intl';
import * as React from 'react';

interface CompProps {
    operations?:Array<any>, 
    orgSelectedId?:number, 
    onOrgAdd?:Function, 
    onUserAdd?:Function, 
    onSearch?:Function
}
interface CompState {
    searchKey:number|string
}

class Toolbar extends React.Component<CompProps,CompState> {
    constructor (props:CompProps) {
        super(props);

        this.state = {
            searchKey: ''
        };
    }

    handleChange = (e:any) => {
        this.setState({ searchKey: e.target.value });
    };

    handleClear = () => {
        this.setState({ searchKey: '' });
        // this.props.onSearch.call(this, '');
    };

    render () {
        const { operations, orgSelectedId, onOrgAdd, onUserAdd, onSearch } = this.props;
        const searchKey = this.state.searchKey;
        const suffix = searchKey && <Icon key="1" type="close-circle" onClick={this.handleClear} style={{ color: '#ddd', marginRight: 5 }}/>;
        return (
            <div className="toolbar">
                {
                    operations.include('user_operation_add') && (
                        <div >
                            <Button type="primary" onClick={()=>onOrgAdd()} icon="usergroup-add" disabled={orgSelectedId == -1}><FormattedMessage id={'user_operation_addOrg'}/></Button>
                            <Button type="primary" onClick={()=>onUserAdd()} icon="user-add" className="margin-left" disabled={orgSelectedId == -1}><FormattedMessage id={'user_operation_addStaff'}/></Button>
                        </div>
                    )
                }
                <Input.Search placeholder="输入姓名或角色搜索员工"
                        value={searchKey}
                        onChange={this.handleChange}
                        onSearch={onSearch.bind(this)}
                        style={{ maxWidth: 300}}
                        suffix={suffix} enterButton/>
            </div>
        );
    }
}

const ToolbarComp = connect((state:any) => {
    const operations = state.app.menuObj['systemConfig/user'].functions;
    const { orgSelectedId } = state.user;
    return { operations, orgSelectedId };
}, dispatch => ({
    /**
     * 添加组织
     */
    onOrgAdd () {
        dispatch({ type: 'USER_ORG_ADD' });
    },
    /**
     * 添加用户
     */
    onUserAdd () {
        dispatch({ type: 'USER_ADD' });
    },
    /**
     * 模糊搜索
     * @param value
     */
    onSearch (value:any) {
        dispatch({ type: 'USER_SEARCH', value: value });
        dispatch(action.loadUserPage(this.props.orgSelectedId, 1));
    }
}))(Toolbar);

export default ToolbarComp;
