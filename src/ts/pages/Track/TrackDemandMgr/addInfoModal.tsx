import {connect} from 'react-redux';
import {ExFormItem,ExModal} from 'components/index';
import {Form,message} from 'antd';
import action from 'actions/track';
import { _Object } from 'customInterface';
import * as React from 'react';

interface EditFormProps {
    form?:any,
    eventTypeCodes?:Array<_Object>,
    trackDemand_allData?:Array<_Object>
}
interface CompProps extends EditFormProps {
    show?:boolean,
    onClose?:Function,
    addInfoData?:_Object,
    loading?:boolean,
    onChange?:Function,
    onSubmit?:Function,
}

const EditForm:any = Form.create({
    onFieldsChange(props:CompProps,changeFields:_Object){
        var changed = Object.keys(changeFields).map(o=>{
            var obj:_Object = new Object();
            obj[o] = changeFields[o].value;
            return obj;
        });
        // props.onChange(props.addInfoData,changed[0]);
    },
    mapPropsToFields:(props)=> {
        const {addInfoData,eventTypeCodes} = props;
        const eventTypeCode = eventTypeCodes.find((o:_Object)=>o.name==addInfoData.eventType)
        return {
            id:Form.createFormField({value:addInfoData.id}),
            eventId:Form.createFormField({value:addInfoData.eventId}),
            eventTypeCode:Form.createFormField({value:eventTypeCode?eventTypeCode.id:''}),
            param:Form.createFormField({value:addInfoData.param}),
            paramDescribe:Form.createFormField({value:addInfoData.paramDescribe}),
            demandId:Form.createFormField({value:addInfoData.demandId}),
        }
    }
})((props:EditFormProps)=>{
    const {form,eventTypeCodes,trackDemand_allData} = props;
    const {getFieldDecorator} = form;
    return (
        <Form>
            <ExFormItem type={'hidden'} name={'id'} getFieldDecorator={getFieldDecorator}/>
            <ExFormItem name={'eventId'} label={'eventId'} getFieldDecorator={getFieldDecorator} required/>
            <ExFormItem type={'select'} list={eventTypeCodes} name={'eventTypeCode'} label={'eventTypeCode'} getFieldDecorator={getFieldDecorator} required/>
            <ExFormItem type={'select'} list={trackDemand_allData} showSearch name={'demandId'} label={'demandId'} getFieldDecorator={getFieldDecorator} required/>
            <ExFormItem type={'textarea'} name={'paramDescribe'} label={'paramDescribe'} getFieldDecorator={getFieldDecorator}/>
            <ExFormItem type={'textarea'} name={'param'} label={'param'} getFieldDecorator={getFieldDecorator}/>
        </Form>
    )
});

class AddInfoModal extends React.Component<CompProps>{
    public form:any;

    handleSave = () => {
        const form = this.form;
        form.validateFields((err:any,data:_Object)=>{
            if(err){
                return;
            }
            data.trackType = this.props.trackDemand_allData.find(o=>{
                return o.id = data.demandId;
            }).trackType
            this.props.onSubmit(data);
            this.props.onClose();
        })
    };
    fieldsOnChange = (props:_Object,changeFields:_Object) => {
        var newData = {...props,...changeFields};
    }

    saveFormRef = (form:any) => {
        this.form = form;
    }

    render(){
        const {show,onClose,addInfoData,loading,eventTypeCodes,trackDemand_allData} = this.props;
        return (
            <ExModal
                visible={show}
                confirmLoading={loading}
                title={'Add Info'}
                onCancel={onClose}
                onOk={this.handleSave}
                width={600}
            >
                <EditForm
                    ref={this.saveFormRef}
                    addInfoData={addInfoData}
                    onChange={this.fieldsOnChange}
                    eventTypeCodes={eventTypeCodes}
                    trackDemand_allData={trackDemand_allData}
                />
            </ExModal>
        )
    }
}

const AddInfoModalComp = connect((state:any)=>{
    const {
        trackDemand_addInfoModalShow:show,
        trackDemand_addInfoData:addInfoData,
        trackDemand_addInfoModalLoading:addInfoModalLoading,
        eventTypeCodes,
        trackDemand_allData
    } = state['track'];
    return {show,addInfoData,loading:addInfoModalLoading,eventTypeCodes,trackDemand_allData};
},dispatch=>({
    
    onSubmit(data:_Object){
        dispatch(action.addOrEditTrackInfo(data));
    },
    onClose(){
        dispatch({type:'TRACK_DEMAND_ADDINFOMODAL_SHOW',show:false});
    }
}))(AddInfoModal);

export default AddInfoModalComp;

