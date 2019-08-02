import action from 'actions/track';
import appAction from 'actions/app';
import { connect } from 'react-redux';
// import Toolbar from './Toolbar';
import Table from './Table';
import Toolbar from 'components/App/Toolbar';
import SearchModal from './SearchModal';
import {Button} from "antd"
import EditModal from './EditModal';
import VerifyModal from './VerifyModal';
import AddInfoModal from './addInfoModal';
import * as React from 'react';
import { _Object } from 'customInterface';
require('less/track.less');

interface CompProps {
    init:Function,
    onRefresh:Function,
    onSearch:Function,
    onAdd:Function,
    onViewStateChange:Function,
    viewState:number
}
interface CompState {
    showSearchModal?:boolean,
    isBatchDelState:boolean,
}

class TrackDemandMgr extends React.Component<CompProps,CompState> {
    public handleBatchDel:any;
    public table:any;
    constructor(props:CompProps){
        super(props);
        this.state = {
            showSearchModal:false,
            isBatchDelState:false,
        };
        this.table = React.createRef();
    }
    componentDidMount () {
        this.props.init();
    }

    onCancelBatchDel = () => {
        this.setState({isBatchDelState:false});
        this.table.current.wrappedInstance.onCancel();
    }
    onConfirmBatchDel = () => {
        this.setState({isBatchDelState:false});
        this.table.current.wrappedInstance.onBatchDel();
    }
    handleToggle = () => {
        this.props.onViewStateChange((this.props.viewState!==0)?0:null);
    }

    render () {
        const {onRefresh,onSearch,viewState} = this.props;
        return (
            <div className='trackDemadContainer'>
                <Toolbar onRefresh={onRefresh}>
                    {
                        this.state.isBatchDelState?(
                            <React.Fragment>
                                <Button onClick={this.onCancelBatchDel}>取消</Button>
                                <Button onClick={this.onConfirmBatchDel} type={'primary'} style={{marginLeft:20}}>确定删除</Button>
                            </React.Fragment>
                        ):(
                            <React.Fragment>
                                <Button onClick={() => { this.setState({ showSearchModal: true }); }} icon={'search'}>查询</Button>
                                <Button onClick={()=>this.props.onAdd()} icon={'plus'}>新增</Button>
                                <Button type={'primary'} onClick={this.handleToggle} style={{marginLeft:20}}>{viewState===0?'返回普通查看':'查看我的待审核'}</Button>
                                {/* <Button type={'primary'} style={{marginLeft:20}} onClick={()=>this.setState({isBatchDelState:true})} icon={'trash'}>{'批量删除'}</Button> */}
                            </React.Fragment>
                        )
                    }
                    
                </Toolbar>
                <EditModal/>
                <VerifyModal/>
                <AddInfoModal/>
                <SearchModal
                    show={this.state.showSearchModal}
                    onSearch={onSearch}
                    onClose={() => { this.setState({ showSearchModal: false }); }}/>
                <Table isBatchDelState={this.state.isBatchDelState} ref={this.table}/>
            </div>
        );
    }
}

const TrackDemandMgrComp = connect((state:any)=>{
    const {viewState} = state['track'].trackDemand_searchParams;
    return {viewState};
}, dispatch => ({
    /**
     * page数据初始化加载
     */
    init () {
        dispatch(appAction.getSearchParamsFromLocalStorage()).then(()=>{
            dispatch(action.loadAllTrackType());
            dispatch(action.loadTrackDemand());
            dispatch(action.loadAllTrackDemand());
        })
    },
    /**
     * 点击刷新或操作
     */
    onRefresh(){
        dispatch(action.loadTrackDemand());
    },
    /**
     * 查询
     * @param params
     */
    onSearch (params:_Object) {
        dispatch({ type: 'TRACK_DEMAND_SEARCHPARAM_CHANGE', params });
        dispatch(action.loadTrackDemand(1));
    },
    onAdd(){
        dispatch({type:'TRACK_DEMAND_EDITMODAL_SHOW',show:true});
        dispatch({type:'TRACK_DEMAND_EDITMODAL_RESET'});
    },
    onViewStateChange(state:number){
        dispatch({type:'TRACK_DEMAND_VIEWSTATE_CHANGE',state});
        dispatch(action.loadTrackDemand());
    }
}))(TrackDemandMgr);

module.exports = TrackDemandMgrComp;
