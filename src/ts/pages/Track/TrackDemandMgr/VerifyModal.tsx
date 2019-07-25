import {connect} from 'react-redux';
import {ExFormItem,ExModal} from 'components/index';
import {Form,message,Button} from 'antd';
import action from 'actions/track';
import { _Object } from 'customInterface';
import * as React from 'react';

interface VerifyFormProps {
    trackType_list?:Array<_Object>,
    form?:any
}

interface CompProps extends VerifyFormProps {
    show?:boolean,
    onClose?:Function,
    editData?:_Object,
    loading?:boolean,
    onChange?:Function,
    onSubmit?:Function,
}

const VerifyForm:any = Form.create()((props:CompProps)=>{
    const {form} = props;
    const {id,name,trackType,testPath,description} = props.editData;
    const {getFieldDecorator} = form;
    return (
        <Form>
            <ExFormItem type={'hidden'} name={'id'} getFieldDecorator={getFieldDecorator} initialValue={id}/>
            <ExFormItem type={'static'} name={'name'} label={'name'} getFieldDecorator={getFieldDecorator} initialValue={name}/>
            <ExFormItem name={'trackType'} label={'trackType'} type={'static'} getFieldDecorator={getFieldDecorator} initialValue={trackType}/>
            <ExFormItem type={'static'} name={'testPath'} label={'testPath'} getFieldDecorator={getFieldDecorator} initialValue={testPath}/>
            <ExFormItem type={'static'} name={'description'} label={'description'} getFieldDecorator={getFieldDecorator} initialValue={description}/>
            <ExFormItem type={'textarea'} name={'verifyMessage'} label={'verifyMessage'} getFieldDecorator={getFieldDecorator}/>
        </Form>
    )
});

class VerifyModal extends React.Component<CompProps>{
    public form:any;

    fieldsOnChange = (props:_Object,changeFields:_Object) => {
        var newData = {...props,...changeFields};
    }

    saveFormRef = (form:any) => {
        this.form = form;
    };

    handleReview = (state:number) => {
        const form = this.form;
        form.validateFields((err:any,data:_Object)=>{
            if(err){
                return;
            }
            this.props.onSubmit(state,data);
        })
    }
    render(){
        const {show,onClose,editData,loading} = this.props;
        return (
            <ExModal
                visible={show}
                confirmLoading={loading}
                title={'Verify'}
                onCancel={onClose}
                footer={[
                    <Button key="back" onClick={this.handleReview.bind(this,2)}>
                      驳回
                    </Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={this.handleReview.bind(this,1)}>
                      通过
                    </Button>,
                  ]}
            >
                <VerifyForm
                    ref={this.saveFormRef}
                    editData={editData}
                    onChange={this.fieldsOnChange}
                />
            </ExModal>
        )
    }
}

const VerifyModalComp = connect((state:any)=>{
    const {
        trackDemand_verifyModalShow:show,
        trackDemand_editData:editData,
        // trackDemand_editModalLoading:editModalLoading,
        // trackType_list
    } = state['track'];
    return {show,editData};
},dispatch=>({
    onSubmit(state:number,data:_Object){
        dispatch(action.verifyTrackDemand(state,data));
    },
    onClose(){
        dispatch({type:'TRACK_DEMAND_VERIFYMODAL_SHOW',show:false});
    }
}))(VerifyModal);

export default VerifyModalComp;

