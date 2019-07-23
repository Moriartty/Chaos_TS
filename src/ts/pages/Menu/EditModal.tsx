import { connect } from 'react-redux';
import action from 'actions/menu';
import { Form } from 'antd';
import {ExFormItem,ExModal} from 'components/index';
import { FormattedMessage,injectIntl } from 'react-intl';
import * as React from 'react';
import { _Object } from 'customInterface';
import {menuTypes} from 'config/const';

interface CompProps {
    onSubmit?:Function,
    editShow?:boolean, 
    editData?:any, 
    list?:any, 
    onClose?:Function, 
    intl?:any
}
interface EditFormProps {
    data?:any,
    list?:any,
    form?:any,
    intl?:any,
    type?:number,
    onChange?:Function
}
interface CompState {
    type?:number
}

const EditForm:any = Form.create({
    //监听fields变化
    onFieldsChange(props:EditFormProps, changedFields:_Object) {
        var changed = Object.keys(changedFields).map(o=>{
            var obj:_Object = new Object();
            obj[o] = changedFields[o].value;
            return obj;
        })
        props.onChange(changed[0]);
    }
})((props:EditFormProps) => {
    const { data, list, form,intl,type } = props;
    const { getFieldDecorator } = form;
   
    return (
        <Form>
            <ExFormItem 
                label="上级目录"
                type="select"
                name="pid"
                initialValue={data.pid||0}
                //只筛选比当前层级高的
                list={list.filter((o:_Object)=>o.type<type).map((o:_Object) => ({
                    id: o.oid,
                    name: o.indents.join(' ')+intl.formatMessage({ id: o.name })
                }))}
                required
                //操作不允许移动
                disabled={!data.oid||data.type==4}
                getFieldDecorator={getFieldDecorator}
            />
            <ExFormItem label="类型"
                        type="radio"
                        button
                        name="type"
                        initialValue={type}
                        list={(function():any{
                            //只有叶子模块可以新增操作
                            if(~~data.type===4)
                                return menuTypes.filter(o=>o.id>=data.type)
                            else 
                                return menuTypes.filter(o=>o.id>=data.type&&o.id<4)
                        })()}
                        required
                        disabled={data.oid?true:false}//编辑状态下不允许改变
                        getFieldDecorator={getFieldDecorator}/>
             <ExFormItem label="名称"
                name="name"
                initialValue={data.name}
                placeholder="名称"
                required
                getFieldDecorator={getFieldDecorator}/>
            {
                //module字段一旦填写就不能再修改，这和前端加载页面有关，不要轻易动
                type === 3 && ( 
                    <ExFormItem label="菜单标签"
                        name="module"
                        initialValue={data.module}
                        disabled={data.oid}
                        placeholder="请填写"
                        required
                        getFieldDecorator={getFieldDecorator}/>
                )
            }
            {
                //当item为操作类型时，需要填写url
                type === 4 && (
                    <ExFormItem
                        type='textarea'
                        label='Urls'
                        name='urls'
                        initialValue={data.urls}
                        placeholder='请填写该操作对应的url'
                        required
                        getFieldDecorator={getFieldDecorator}
                    />
                )
            }
            <ExFormItem label="状态"
                type="switch"
                name="display"
                initialValue={data.display === 1}
                onText="显示"
                offText="隐藏"
                required
                getFieldDecorator={getFieldDecorator}/>
            <ExFormItem type="hidden"
                name="oid"
                initialValue={data.oid}
                getFieldDecorator={getFieldDecorator}/>
        </Form>
    );
});

class EditModal extends React.Component<CompProps,CompState> {
    public form:any;
   
    constructor(props:CompProps){
        super(props);
        this.state = {
            type:parseInt(props.editData.type)
        }
    }
    componentWillReceiveProps(nextProps:CompProps){
        const newType = parseInt(nextProps.editData.type); 
        if(newType!==this.state.type)
            this.setState({type:newType})
    }
    handleSave = () => {
        const form = this.form;
        form.validateFields((err:any, data:_Object) => {
            if (err) {
                return;
            }
            data.display = data.display ? 1 : 0;
            this.props.onSubmit.call(this, data);
        });
    };

    saveFormRef = (form:any) => {
        this.form = form;
    };
    /**
     * type改变时，state做相应变化
     */
    fieldsOnChange = (changeFields:any) => {
        if(changeFields.hasOwnProperty('type'))
            this.setState({type:changeFields['type']});
    }

    render () {
        const { editShow=false, editData: data, list, onClose, intl } = this.props;
       
        return (
            <ExModal
                visible={editShow}
                title={`${data.oid > 0 ? '修改' : '新增'}菜单信息`}
                onCancel={onClose}
                onOk={this.handleSave}
            >
                <EditForm
                    ref={this.saveFormRef}
                    data={data}
                    type={this.state.type}
                    list={list}
                    intl={intl}
                    onChange={this.fieldsOnChange}
                />
            </ExModal>
        );
    }
}

const EditModalComp:any = connect((state:any) => {
    const { editShow, editData, list } = state.menu;
    return { editShow, editData, list};
}, dispatch => ({
    /**
     * 提交保存
     * @param data
     */
    onSubmit (data:any) {
        if (data.oid) {
            dispatch(action.updateMenu(data)).then(() => {
                this.props.onClose();
                // 重新加载列表
                dispatch(action.loadList());
            });
        } else {
            dispatch(action.addMenu(data)).then(() => {
                this.props.onClose();
                // 重新加载列表
                dispatch(action.loadList());
            });
        }
    },
    /**
     * 关闭
     */
    onClose () {
        dispatch({ type: 'MENU_EDIT_CLOSE' });
    }
}))(EditModal);

export default injectIntl(EditModalComp);
