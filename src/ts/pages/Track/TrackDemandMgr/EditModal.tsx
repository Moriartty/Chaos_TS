import {connect} from 'react-redux';
import {ExFormItem,ExModal} from 'components/index';
import {Form,message} from 'antd';
import action from 'actions/track';
import { _Object } from 'customInterface';
import * as React from 'react';

interface EditFormProps {
    trackType_allData?:Array<_Object>,
    form?:any
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
        const params = props.editData;
        return {
            id:Form.createFormField({value:params.id}),
            name:Form.createFormField({value:params.name}),
            // state:Form.createFormField({value:params.state}),
            testPath:Form.createFormField({value:params.testPath}),
            trackType:Form.createFormField({value:params.trackType}),
            description:Form.createFormField({value:params.description})
        }
    }
})((props:CompProps)=>{
    const {form,trackType_allData} = props;
    const {getFieldDecorator} = form;
    return (
        <Form>
            <ExFormItem type={'hidden'} name={'id'} getFieldDecorator={getFieldDecorator}/>
            <ExFormItem name={'name'} label={'name'} getFieldDecorator={getFieldDecorator} required/>
            <ExFormItem name={'trackType'} label={'trackType'} type={'select'} list={trackType_allData.map(o=>({id:o.trackId,name:o.name}))} getFieldDecorator={getFieldDecorator} required/>
            {/* <ExFormItem name={'state'} label={'state'} getFieldDecorator={getFieldDecorator}/> */}
            <ExFormItem name={'testPath'} label={'testPath'} getFieldDecorator={getFieldDecorator}/>
            <ExFormItem name={'description'} label={'description'} getFieldDecorator={getFieldDecorator}/>
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
        const {show,onClose,editData,loading,trackType_allData} = this.props;
        return (
            <ExModal
                visible={show}
                confirmLoading={loading}
                title={editData.id?'Edit':'Add'}
                onCancel={onClose}
                onOk={this.handleSave}
            >
                <EditForm
                    ref={this.saveFormRef}
                    editData={editData}
                    onChange={this.fieldsOnChange}
                    trackType_allData={trackType_allData}
                />
            </ExModal>
        )
    }
}

const EditModalComp = connect((state:any)=>{
    const {
        trackDemand_editModalShow:show,
        trackDemand_editData:editData,
        trackDemand_editModalLoading:editModalLoading,
        trackType_allData
    } = state['track'];
    return {show,editData,loading:editModalLoading,trackType_allData};
},dispatch=>({
    
    onSubmit(data:_Object){
        dispatch(action.addOrEditTrackDemand(data));
    },
    onClose(){
        dispatch({type:'TRACK_DEMAND_EDITMODAL_SHOW',show:false});
    }
}))(EditModal);

export default EditModalComp;

