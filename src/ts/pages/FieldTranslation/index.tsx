import action from 'actions/fieldTranslation';
import appAction from 'actions/app';
import { connect } from 'react-redux';
// import Toolbar from './Toolbar';
import Table from './Table';
import Toolbar from 'components/App/Toolbar';
import SearchModal from './SearchModal';
import {Button} from "antd"
import BatchEditModal from './BatchEditModal';
import { FormattedMessage, injectIntl } from 'react-intl';
import * as React from 'react';
import { _Object } from 'customInterface';


interface CompProps {
    init:Function,
    onRefresh:Function,
    onSearch:Function,
    onAdd:Function,
    operations:Array<string>
}
interface CompState {
    showSearchModal?:boolean,
    isBatchDelState:boolean
}

class FieldTranslation extends React.Component<CompProps,CompState> {
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
        const {onRefresh,onSearch,operations} = this.props;
        return (
            <div className='fieldTranslationContainer'>
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
                                {
                                    operations.indexOf('fieldTranslation_operation_add')>-1&&
                                    <Button onClick={()=>this.props.onAdd()} style={{marginLeft:20}} icon={'plus'}>
                                        <FormattedMessage id='fieldTranslation_operation_add'/>
                                    </Button> 
                                }
                                {
                                    operations.indexOf('fieldTranslation_operation_delete')>-1&&
                                    <Button type={'primary'} style={{marginLeft:20}} onClick={()=>this.setState({isBatchDelState:true})} icon={'delete'}>
                                        <FormattedMessage id={'fieldTranslation_operation_batchDelete'}/>
                                    </Button>
                                }
                            </React.Fragment>
                        )
                    }
                    
                </Toolbar>
                <BatchEditModal/>
                <SearchModal
                    show={this.state.showSearchModal}
                    onSearch={onSearch}
                    onClose={() => { this.setState({ showSearchModal: false }); }}/>
                <Table isBatchDelState={this.state.isBatchDelState} ref={this.table}/>
            </div>
        );
    }
}

const FieldTranslationComp = connect((state:any)=>{
    const operations = state.app.menuObj['systemConfig/fieldTranslation'].functions;
    return {operations};
}, dispatch => ({
    /**
     * page数据初始化加载
     */
    init () {
        dispatch(appAction.getSearchParamsFromLocalStorage()).then(()=>{
            dispatch(action.loadSystemList());
            dispatch(action.loadFieldsData());
        })
    },
    /**
     * 点击刷新或操作
     */
    onRefresh(){
        dispatch(action.loadFieldsData());
    },
    /**
     * 查询
     * @param params
     */
    onSearch (params:_Object) {
        console.log(params);
        dispatch({ type: 'FIELDTRANS_SEARCHPARAMS_CHANGE', params });
        dispatch(action.loadFieldsData(1));
    },
    onAdd(){
        dispatch({type:'FIELDTRANS_EDITMODAL_SHOW',show:true});
        dispatch({type:'FIELDTRANS_EDITMODAL_RESET'});
    }
}))(FieldTranslation);

module.exports = FieldTranslationComp;
