import action from 'actions/track';
import { connect } from 'react-redux';
// import Toolbar from './Toolbar';
import Table from './Table';
import Toolbar from 'components/App/Toolbar';
import SearchModal from './SearchModal';
import {Button} from "antd"
import EditModal from './EditModal';
import * as React from 'react';
import { _Object } from 'customInterface';
require('less/track.less');

interface CompProps {
    init:Function,
    onRefresh:Function,
    onSearch:Function,
    onAdd:Function
}
interface CompState {
    showSearchModal?:boolean,
    isBatchDelState:boolean
}

class TrackTypeMgr extends React.Component<CompProps,CompState> {
    public handleBatchDel:any;
    public table:any;
    constructor(props:CompProps){
        super(props);
        this.state = {
            showSearchModal:false,
            isBatchDelState:false
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

    render () {
        const {onRefresh,onSearch} = this.props;
        return (
            <div className='trackTypeContainer'>
                <Toolbar onRefresh={onRefresh}>
                    {
                        this.state.isBatchDelState?(
                            <React.Fragment>
                                <Button onClick={this.onCancelBatchDel}>取消</Button>
                                <Button onClick={this.onConfirmBatchDel} type={'primary'} style={{marginLeft:20}}>确定删除</Button>
                            </React.Fragment>
                        ):(
                            <React.Fragment>
                                {/* <Button onClick={() => { this.setState({ showSearchModal: true }); }} icon={'search'}>查询</Button> */}
                                <Button onClick={()=>this.props.onAdd()} style={{marginLeft:20}} icon={'plus'}>新增</Button>
                                <Button type={'primary'} style={{marginLeft:20}} onClick={()=>this.setState({isBatchDelState:true})} icon={'trash'}>{'批量删除'}</Button>
                            </React.Fragment>
                        )
                    }
                    
                </Toolbar>
                <EditModal/>
                <SearchModal
                    show={this.state.showSearchModal}
                    onSearch={onSearch}
                    onClose={() => { this.setState({ showSearchModal: false }); }}/>
                <Table isBatchDelState={this.state.isBatchDelState} ref={this.table}/>
            </div>
        );
    }
}

const TrackTypeMgrComp = connect(null, dispatch => ({
    /**
     * page数据初始化加载
     */
    init () {
        dispatch(action.loadList());
    },
    /**
     * 点击刷新或操作
     */
    onRefresh(){
        dispatch(action.loadList());
    },
    /**
     * 查询
     * @param params
     */
    onSearch (params:_Object) {
        dispatch({ type: 'OGC_SEARCHPARAM_CHANGE', params });
        dispatch(action.loadList(1));
    },
    onAdd(){
        dispatch({type:'TRACK_EDITMODAL_SHOW',show:true});
        dispatch({type:'TRACK_EDITMODAL_RESET'});
    }
}))(TrackTypeMgr);

module.exports = TrackTypeMgrComp;
