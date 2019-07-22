import * as React from 'react';
import {connect} from 'react-redux';
import {ExModal,ExFormItem} from 'components/index';
import {Form} from 'antd';
import { _Object } from 'customInterface';

interface CompProps {
    show?:boolean,
    data?:_Object,
    onSubmit?:Function,
    onClose?:Function
}
interface EditFormProps {
    form:any,
    data:_Object
}
const EditForm = Form.create({
    mapPropsToFields: (props:EditFormProps) => {
        const params = props.data;
        return {
            oid: Form.createFormField({ value : params.oid }),
            pid: Form.createFormField({ value : params.pid }),
            systemName: Form.createFormField({ value : params.systemName })
        };
    }
})((props:EditFormProps)=>{
    const {form} = props;
    const { getFieldDecorator, getFieldValue } = form;
    return (
        <Form>
            <ExFormItem type='hidden' name='oid' getFieldDecorator={getFieldDecorator}/>
            <ExFormItem type='hidden' name='pid' getFieldDecorator={getFieldDecorator}/>
            <ExFormItem label='SystemName' name='systemName' getFieldDecorator={getFieldDecorator}/>
        </Form>
    );
})

class EditSystemModal extends React.Component<CompProps>{
    public form:any;

    handleSave = () => {
        const form = this.form;
        form.validateFields((err:any, data:_Object) => {
            if (err) {
                return;
            }
            this.props.onSubmit.call(this, data);
        });
    };

    saveFormRef = (form:any) => {
        this.form = form;
    };

    render () {
        const { show=false, data, onClose } = this.props;
        return (
            <ExModal
                visible={show}
                title={`${data.id > 0 ? '修改' : '新增'}系统信息`}
                onCancel={onClose}
                onOk={this.handleSave}
            >
                <EditForm
                    ref={this.saveFormRef}
                    data={data}
                />
            </ExModal>
        );
    }
}

const EditSystemModalComp = connect((state:any)=>{
    const {systemEditModalShow:show,systemEditData:data} = state['menu'];
    return {show,data};
},dispatch=>({
    onSubmit(data:_Object){
        console.log(data);
        this.onClose();
    },
    onClose(){
        dispatch({type:'MENU_SYSTEMEDITMODAL_CLOSE'});
    }
}))(EditSystemModal);

export default EditSystemModalComp;