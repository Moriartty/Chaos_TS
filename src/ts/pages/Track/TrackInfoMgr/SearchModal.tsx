import { connect } from 'react-redux';
import ExFormItem from 'components/ExFormItem';
import ExModal from 'components/ExModal';
import { Form } from 'antd';
import * as React from 'react';
import { _Object } from 'customInterface';

interface EditFormProps {
    searchParams?:_Object,
    eventTypeCodes?:Array<_Object>,
    trackType_allData?:Array<_Object>,
    form?:any
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
            eventId:Form.createFormField({value:params.eventId}),
            eventType:Form.createFormField({value:params.eventType}),
            trackType:Form.createFormField({value:params.trackType}),
        };
    }
})((props:EditFormProps) => {
    const { form,eventTypeCodes,trackType_allData } = props;
    const { getFieldDecorator } = form;
    return (
        <Form>
            <ExFormItem  label={'EventId'} name={'eventId'} getFieldDecorator={getFieldDecorator}/>
            <ExFormItem  type={'select'} list={eventTypeCodes} label={'EventType'} name={'eventType'} getFieldDecorator={getFieldDecorator}/>
            <ExFormItem  type={'select'} list={trackType_allData.map(o=>({id:o.trackId,name:o.name}))} label={'TrackType'} name={'trackType'} getFieldDecorator={getFieldDecorator}/>
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
        const { show, onClose,searchParams,eventTypeCodes,trackType_allData} = this.props;
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
                    eventTypeCodes={eventTypeCodes}
                    trackType_allData={trackType_allData}
                    />
            </ExModal>
        );
    }
}

const SearchModalComp = connect((state:any) => {
    const { trackInfo_searchParams:searchParams,eventTypeCodes,trackType_allData } = state['track'];
    return { searchParams,eventTypeCodes,trackType_allData };
}, null)(SearchModal);

export default SearchModalComp;
