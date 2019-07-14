import { connect } from 'react-redux';
import action from 'actions/menu';
import appAction from 'actions/app';
import EditModal from './EditModal';
// import Toolbar from './Toolbar';
import Toolbar from 'components/App/Toolbar';
import Table from './Table';
import * as React from 'react';

import 'less/menu';
import {Button} from "antd";
import {FormattedMessage} from "react-intl";

interface CompProps {
    onLoad:Function,
    onLeave:Function,
    onAdd:Function,
    onRefresh:Function,
    operations:Array<string>
}

class Menu extends React.Component<CompProps> {
    componentWillMount () {
        this.props.onLoad();
    }

    componentWillUnmount () {
        this.props.onLeave();
    }

    render () {
        // onAdd={onAdd.bind(this, 0)}
        const { onAdd, onRefresh,operations } = this.props;
        return (
            <div className="page-component menu">
                <EditModal/>
                <Toolbar onRefresh={onRefresh}>
                    <div className="toolbar">
                        {
                            operations.indexOf('CREATE') >= 0 && <Button type="primary" onClick={onAdd.bind(this,0)} icon="plus"><FormattedMessage id={'menu_operation_add'}/></Button>
                        }
                        {/*{*/}
                            {/*operations.length >= 0 && <Button onClick={onRefresh} icon="sync"><FormattedMessage id={'menu_operation_update'}/></Button>*/}
                        {/*}*/}
                    </div>
                </Toolbar>
                <Table onSubAdd={onAdd}/>
            </div>
        );
    }
}

const MenuComponent = connect((state:any) => {
    const operations = state.app.menuObj['systemConfig/menu'].functions;
    return { operations };
}, dispatch => ({
    onLoad () {
        dispatch(action.loadList());
    },
    onLeave () {
        dispatch({ type: 'MENU_PAGE_LEAVE' });
    },
    /**
     * 添加菜单
     * @param parentId
     */
    onAdd (parentId:number|string) {
        dispatch({ type: 'MENU_ADD', parentId: parentId });
    },
    /**
     * 更新菜单缓存
     */
    onRefresh () {
        dispatch(appAction.loadUserMenu(true));
    }
}))(Menu);

module.exports = Menu;
