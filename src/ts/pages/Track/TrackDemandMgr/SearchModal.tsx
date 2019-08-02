import { connect } from 'react-redux';
import ExFormItem from 'components/ExFormItem';
import ExModal from 'components/ExModal';
import { Form } from 'antd';
import * as React from 'react';
import { _Object } from 'customInterface';

interface EditFormProps {
    searchParams?:_Object,
    trackType_allData?:Array<_Object>
    form?:any,
    verifyStates?:Array<_Object>
}
interface CompProps extends EditFormProps {
    onSearch:Function,
    show?:boolean, 
    onClose:Function
}

const SearchForm:any = Form.create({
    mapPropsToFields: (props:EditFormProps) => {
        const params = props.searchParams;
        return {
            name: Form.createFormField({ value: params.name }),
            trackType: Form.createFormField({ value: params.trackType }),
            viewState: Form.createFormField({ value: params.viewState })
        };
    }
})((props:EditFormProps) => {
    const { form,trackType_allData,verifyStates } = props;
    const { getFieldDecorator } = form;
    return (
        <Form>
            <ExFormItem  label={'Name'} name={'name'} getFieldDecorator={getFieldDecorator}/>
            <ExFormItem  type={'select'} list={trackType_allData.map(o=>({id:o.trackId,name:o.name}))} label={'TrackType'} name={'trackType'} getFieldDecorator={getFieldDecorator}/>
            <ExFormItem  type={'select'} list={verifyStates.map(o=>({id:o.state,name:o.stateMsg}))} label={'ViewState'} name={'viewState'} getFieldDecorator={getFieldDecorator}/>
        </Form>
    );
});

class SearchModal extends React.Component<CompProps> {
    public form:any;
    handleSave = () => {
        const form = this.form;
        form.validateFields((err:any, data:_Object) => {
            if (err) { return; }
            this.props.onSearch(data);
            this.props.onClose();
        });
    }
    saveFormRef = (form:any) => {
        this.form = form;
    }
    render () {
        const { show, onClose,searchParams,trackType_allData,verifyStates} = this.props;
        return (
            <ExModal
                visible={show}
                title={'查询条件'}
                onCancel={onClose}
                onOk={this.handleSave}
            >
                <SearchForm 
                    ref={this.saveFormRef} 
                    searchParams={searchParams}
                    trackType_allData={trackType_allData}
                    verifyStates={verifyStates}
                    />
            </ExModal>
        );
    }
}

const SearchModalComp = connect((state:any) => {
    const { trackDemand_searchParams:searchParams,trackType_allData,verifyStates } = state['track'];
    return { searchParams,trackType_allData,verifyStates };
}, null)(SearchModal);

export default SearchModalComp;
