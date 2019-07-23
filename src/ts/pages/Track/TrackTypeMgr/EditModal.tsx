import {connect} from 'react-redux';
import {ExFormItem,ExModal} from 'components/index';
import {Form,message} from 'antd';
import action from 'actions/track';
import moment from 'moment';
import { _Object } from 'customInterface';
import * as React from 'react';

interface CompProps {
    show?:boolean,
    onClose?:Function,
    editData?:_Object,
    loading?:boolean,
    onChange?:Function,
    onSubmit?:Function
}

const EditForm:any = Form.create({
    onFieldsChange(props:CompProps,changeFields:_Object){
        var changed = Object.keys(changeFields).map(o=>{
            var obj:_Object = new Object();
            obj[o] = changeFields[o].value;
            return obj;
        });
        props.onChange(props.editData,changed[0]);
    },
    mapPropsToFields:(props)=> {
        const params = props.editData;
        return {
            id:Form.createFormField({value:params.id}),
            title:Form.createFormField({value:params.title}),
            content:Form.createFormField({value:params.content}),
            author:Form.createFormField({value:params.author}),
            happenTime:Form.createFormField({value:moment(params.happenTime)})
        }
    }
})(props=>{
    const {form} = props;
    const {getFieldDecorator} = form;
    return (
        <Form>
            <ExFormItem type={'hidden'} name={'id'} getFieldDecorator={getFieldDecorator}/>
            <ExFormItem name={'title'} label={'Title'} getFieldDecorator={getFieldDecorator}/>
            <ExFormItem type={'textarea'} name={'content'} label={'Content'} getFieldDecorator={getFieldDecorator} rows={4}/>
            <ExFormItem name={'author'} label={'Author'} getFieldDecorator={getFieldDecorator}/>
            <ExFormItem type={'date'} name={'happenTime'} label={'HappenTime'} getFieldDecorator={getFieldDecorator}/>
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
        const {show,onClose,editData,loading} = this.props;
        return (
            <ExModal
                visible={show}
                confirmLoading={loading}
                title={'Edit'}
                onCancel={onClose}
                onOk={this.handleSave}
            >
                <EditForm
                    ref={this.saveFormRef}
                    editData={editData}
                    onChange={this.fieldsOnChange}
                />
            </ExModal>
        )
    }
}

const EditModalComp = connect((state:any)=>{
    const {editModalShow,editData,editModalLoading} = state['track'];
    return {show:editModalShow,editData,loading:editModalLoading};
},dispatch=>({
    
    onSubmit(data:_Object){
        dispatch(action.editItem(data));
    },
    onClose(){
        dispatch({type:'OGC_EDITMODAL_SHOW',show:false});
    }
}))(EditModal);

export default EditModalComp;

