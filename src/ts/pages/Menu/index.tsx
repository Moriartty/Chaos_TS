import { connect } from 'react-redux';
import action from 'actions/menu';
import appAction from 'actions/app';
import EditModal from './EditModal';
import EditSystemModal from './EditSystemModal';
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
    onEdit?:Function,
    onAddSystem?:Function,
    onRefresh?:Function,
    operations?:Array<string>,
    systemList?:Array<Object>,
    searchParams?:_Object,
    onSelectedSystemChanged?:any
}


class Menu extends React.Component<CompProps> {
    constructor(props:CompProps){
        super(props);
    }
    componentDidMount () {
        this.props.init();
    }

    componentWillUnmount () {
        this.props.onLeave();
    }

    // handleChange = (value:any) => {
    //     this.setState({selectedSystem:value},()=>{
    //         this.props.onLoad(this.state.selectedSystem)
    //     });
    // }
    /**
     * 给外界改变state的钩子函数
     */
    // changeState = (newState:CompState) => {
    //     this.setState(newState);
    // };

    render () {
        const { onAdd,onEdit,onAddSystem, onRefresh,operations,systemList,onSelectedSystemChanged } = this.props;
        const {selectedSystem} = this.props.searchParams;
        return (
            <div className="page-component menu">
                <EditModal/>
                <EditSystemModal/>
                <Toolbar onRefresh={onRefresh}>
                    <div className="toolbar">
                        <Select 
                            value={selectedSystem} 
                            style={{ marginRight:20,width:100 }} 
                            onChange={onSelectedSystemChanged}
                            >
                            {
                                systemList.map((o:_Object)=>{
                                    return <Option value={o.oid} key={o.oid}><FormattedMessage id={o.name}/></Option>
                                })
                            }
                        </Select>
                        {
                            operations.indexOf('menu_operation_add') >= 0 && <Button type="primary" onClick={onAddSystem.bind(this,0)} icon="plus"><FormattedMessage id={'menu_operation_add'}/></Button>
                        }
                        {/*{*/}
                            {/*operations.length >= 0 && <Button onClick={onRefresh} icon="sync"><FormattedMessage id={'menu_operation_update'}/></Button>*/}
                        {/*}*/}
                    </div>
                </Toolbar>
                <Table onSubAdd={onAdd} onSubEdit={onEdit}/>
            </div>
        );
    }
}

const MenuComponent = connect((state:any) => {
    const operations = state.app.menuObj['systemConfig/menu'].functions;
    const {systemList,searchParams} = state['menu'];
    return { operations,systemList,searchParams };
}, dispatch => ({
    init () {
        dispatch(appAction.getSearchParamsFromLocalStorage()).then(()=>{
            dispatch(action.loadSystemList()).then((data:Array<_Object>)=>{
                dispatch(action.loadList());
            });
        }) 
    },
    onSelectedSystemChanged(id:number){
        dispatch({type:'MENU_SEARCHPARAMS_CHANGE',params:{selectedSystem:id}});
        dispatch(action.loadList(id));
    },
    onLeave () {
        dispatch({ type: 'MENU_PAGE_LEAVE' });
    },
    /**
     * 添加系统
     * @param parentId
     */
    onAddSystem (parentId:number|string) {
        // dispatch({ type: 'MENU_ADD', parentId: parentId });
        dispatch({type:'MENU_SYSTEMEDITMODAL_ADD'});
    },
    /**
     * 添加菜单
     */
    onAdd(data:_Object){
        const pid = data.oid,_type = parseInt(data.type||1)+1;//默认当前level的下一级
        dispatch({type:'MENU_ADD',pid,_type});
    },
    /**
     * 
     * @param data 编辑菜单
     */
    onEdit(data:_Object){
        dispatch({ type: 'MENU_EDIT', data: data });
    },
    /**
     * 更新菜单缓存
     */
    onRefresh () {
        dispatch(appAction.loadUserMenu(true));
    }
}))(Menu);

module.exports = MenuComponent;
