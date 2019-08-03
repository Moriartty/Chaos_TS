import {connect} from 'react-redux';
import {ExFormItem,ExModal} from 'components/index';
import {Form,message} from 'antd';
import action from 'actions/fieldTranslation';
import appAction from 'actions/app';
import { FormattedMessage, injectIntl } from 'react-intl';
import { _Object } from 'customInterface';
import * as React from 'react';

interface EditFormProps {
    form?:any,
    systemList?:Array<_Object>,
    langList?:Array<_Object>,
    editData?:_Object,
}
interface CompProps extends EditFormProps {
    editModalShow?:boolean,
    onClose?:Function,
    editModalLoading?:boolean,
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
    mapPropsToFields:(props:EditFormProps)=> {
        const params = props.editData;
        let str:string = '';
        if(params.strKey&&params.strVal){
            let temp:_Object = {};
            temp[params.strKey] = params.strVal;
            str = JSON.stringify(temp);
        }
        return {
            id:Form.createFormField({value:params.id}),
            str: Form.createFormField({ value: str }),
            systemId: Form.createFormField({ value: params.systemId }),
            language: Form.createFormField({ value: params.language })
        }
    }
})((props:EditFormProps)=>{
    const {form,systemList,langList} = props;
    const {getFieldDecorator} = form;
    return (
        <Form>
            <ExFormItem  type={'hidden'} name={'id'} getFieldDecorator={getFieldDecorator}/>
            <ExFormItem  type={'textarea'} label={'str'} name={'str'} getFieldDecorator={getFieldDecorator}/>
            <ExFormItem  type={'select'} list={systemList.map(o=>{
                return {
                    id:o.oid,
                    name:o.name
                }
            })} label={'system'} name={'systemId'} getFieldDecorator={getFieldDecorator}/>
            <ExFormItem  type={'select'} list={langList} label={'language'} name={'language'} getFieldDecorator={getFieldDecorator}/>
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
        const {editModalShow:show,onClose,editData,editModalLoading:loading,systemList,langList} = this.props;
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
                    systemList={systemList}
                    langList={langList}
                    onChange={this.fieldsOnChange}
                />
            </ExModal>
        )
    }
}

let EditModalComp = connect((state:any)=>{
    const {langList} = state['app'];
    const {editModalShow,editData,editModalLoading,systemList} = state['fieldTranslation'];
    return {editModalShow,editData,editModalLoading,systemList,langList};
},dispatch=>({
    
    onSubmit(data:_Object){
        const str = JSON.parse(data.str);
        if(!data.id){
            if(Object.keys(str).length>1){
                let arr:_Object = [];
                Object.keys(str).forEach(o=>{
                    arr.push({
                        systemId:data.systemId,
                        language:data.language,
                        strKey:o,
                        strVal:str[o]
                    })
                })
                dispatch(action.batchCreate(arr));
            }else{
                dispatch(action.create({
                    systemId:data.systemId,
                    language:data.language,
                    strKey:Object.keys(str)[0],
                    strVal:str[Object.keys(str)[0]]
                }))
            }
        }else{
            dispatch(action.edit({
                systemId:data.systemId,
                language:data.language,
                strKey:Object.keys(str)[0],
                strVal:str[Object.keys(str)[0]]
            }))
        }
    },
    onClose(){
        dispatch({type:'FIELDTRANS_EDITMODAL_SHOW',show:false});
    }
}))(EditModal);

export default EditModalComp;

