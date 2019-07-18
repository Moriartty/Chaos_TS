import { connect } from 'react-redux';
import action from 'actions/menu';
import appAction from 'actions/app';
import EditModal from './EditModal';
// import Toolbar from './Toolbar';
import Toolbar from 'components/App/Toolbar';
import Table from './Table';
import * as React from 'react';

import 'less/menu';
import {Button,Select} from "antd";
import {FormattedMessage} from "react-intl";
import { _Object } from 'customInterface';
import { isEmpty } from 'utils/index';
const Option = Select.Option;

interface CompProps {
    init?:Function,
    onLoad?:Function,
    onLeave?:Function,
    onAdd?:Function,
    onRefresh?:Function,
    operations?:Array<string>,
    systemList?:Array<Object>
}
interface CompState {
    selectedSystem?:any
}

class Menu extends React.Component<CompProps,CompState> {
    constructor(props:CompProps){
        super(props);
        this.state = {
            selectedSystem:''
        }
    }
    componentWillMount () {
        this.props.init(this.changeState);
    }

    componentWillUnmount () {
        this.props.onLeave();
    }

    handleChange = (value:any) => {
        this.setState({selectedSystem:value},()=>{
            this.props.onLoad(this.state.selectedSystem)
        });
    }
    /**
     * 给外界改变state的钩子函数
     */
    changeState = (newState:CompState) => {
        this.setState(newState);
    };

    render () {
        // onAdd={onAdd.bind(this, 0)}
        const { onAdd, onRefresh,operations,systemList } = this.props;
        // console.log(operations);
        return (
            <div className="page-component menu">
                <EditModal/>
                <Toolbar onRefresh={onRefresh}>
                    <div className="toolbar">
                        <Select value={this.state.selectedSystem} style={{ marginRight:20,width:100 }} onChange={this.handleChange}>
                            {
                                systemList.map((o:_Object)=>{
                                    return <Option value={o.oid} key={o.oid}><FormattedMessage id={o.name}/></Option>
                                })
                            }
                        </Select>
                        {
                            operations.indexOf('menu_operation_add') >= 0 && <Button type="primary" onClick={onAdd.bind(this,0)} icon="plus"><FormattedMessage id={'menu_operation_add'}/></Button>
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
    const {systemList} = state['menu'];
    return { operations,systemList };
}, dispatch => ({
    init (cb:any) {
        dispatch(action.loadSystemList()).then((data:Array<_Object>)=>{
            //先加载系统列表，如果不为空，就选择第一个作为默认值，并加载该系统的目录
            if(!isEmpty(data)){
                const targetSystem:_Object = data[0];
                cb({selectedSystem:targetSystem.oid});
                this.onLoad(targetSystem.oid);
            }
        });
    },
    onLoad(oid:string|number){
        dispatch(action.loadList(oid));
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

module.exports = MenuComponent;
