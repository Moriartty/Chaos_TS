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
    editData?:_Object,
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
        // props.onChange(props.editData,changed[0]);
    },
    mapPropsToFields:(props)=> {
        const {editData,eventTypeCodes} = props;
        return {
            id:Form.createFormField({value:editData.id}),
            eventId:Form.createFormField({value:editData.eventId}),
            eventTypeCode:Form.createFormField({value:eventTypeCodes.find((o:_Object)=>o.name==editData.eventType).id}),
            param:Form.createFormField({value:editData.param}),
            paramDescribe:Form.createFormField({value:editData.paramDescribe}),
            demandId:Form.createFormField({value:editData.demandId}),
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

class EditModal extends React.Component<CompProps>{
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
        })
    };
    fieldsOnChange = (props:_Object,changeFields:_Object) => {
        var newData = {...props,...changeFields};
    }

    saveFormRef = (form:any) => {
        this.form = form;
    };

    render(){
        const {show,onClose,editData,loading,eventTypeCodes,trackDemand_allData} = this.props;
        return (
            <ExModal
                visible={show}
                confirmLoading={loading}
                title={editData.id?'Edit':'Add'}
                onCancel={onClose}
                onOk={this.handleSave}
                width={600}
            >
                <EditForm
                    ref={this.saveFormRef}
                    editData={editData}
                    onChange={this.fieldsOnChange}
                    eventTypeCodes={eventTypeCodes}
                    trackDemand_allData={trackDemand_allData}
                />
            </ExModal>
        )
    }
}

const EditModalComp = connect((state:any)=>{
    const {
        trackInfo_editModalShow:show,
        trackInfo_editData:editData,
        trackInfo_editModalLoading:editModalLoading,
        eventTypeCodes,
        trackDemand_allData
    } = state['track'];
    return {show,editData,loading:editModalLoading,eventTypeCodes,trackDemand_allData};
},dispatch=>({
    
    onSubmit(data:_Object){
        dispatch(action.addOrEditTrackInfo(data));
    },
    onClose(){
        dispatch({type:'TRACK_INFO_EDITMODAL_SHOW',show:false});
    }
}))(EditModal);

export default EditModalComp;

