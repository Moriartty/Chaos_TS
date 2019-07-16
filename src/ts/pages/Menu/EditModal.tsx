import { connect } from 'react-redux';
import action from 'actions/menu';
import menuConfig from 'config/menu';
import { Form } from 'antd';
import ExFormItem from 'components/ExFormItem';
import ExModal from 'components/ExModal';
import { FormattedMessage } from 'react-intl';
import * as React from 'react';
import { _Object } from 'customInterface';

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
    form?:any
}

const EditForm:any = Form.create()((props:EditFormProps) => {
    const { data, list, form } = props;
    const { getFieldDecorator, getFieldValue } = form;
    const type = parseInt(getFieldValue('type') || data.type);
    return (
        <Form>
            <ExFormItem label="上级目录"
                type="select"
                name="parentId"
                initialValue={data.parentId || 0}
                list={list.map((o:_Object) => ({
                    id: o.id,
                    name: o.indents.join('') + o.name
                }))}
                required
                getFieldDecorator={getFieldDecorator}/>
            {
                data.id > 0 ? (
                    <ExFormItem label="类型"
                        type="static"
                        initialValue={type === 1 ? '菜单' : '目录'}/>
                ) : (
                    <ExFormItem label="类型"
                        type="radio"
                        button
                        name="type"
                        initialValue={type}
                        list={[{ id: 1, name: '菜单' }, { id: 2, name: '目录' }]}
                        required
                        getFieldDecorator={getFieldDecorator}/>
                )
            }
            {
                type === 1 && !data.id && (
                    <ExFormItem label="菜单标签"
                        type="select"
                        name="module"
                        initialValue={data.module}
                        list={
                            (() => {
                                let menuList = [];
                                for (let module in menuConfig) {
                                    menuList.push({ id: module, name: `${menuConfig[module].name}(${module})` });
                                }
                                return menuList;
                            }).call(this)
                        }
                        placeholder="请选择"
                        required
                        getFieldDecorator={getFieldDecorator}/>
                )
            }
            <ExFormItem label="名称"
                name="name"
                initialValue={data.name}
                placeholder="菜单名称"
                required
                getFieldDecorator={getFieldDecorator}/>
            <ExFormItem label="状态"
                type="switch"
                name="display"
                initialValue={data.display === 1}
                onText="显示"
                offText="隐藏"
                required
                getFieldDecorator={getFieldDecorator}/>
            <ExFormItem type="hidden"
                name="id"
                initialValue={data.id}
                getFieldDecorator={getFieldDecorator}/>
        </Form>
    );
});

class EditModal extends React.Component<CompProps> {
    form:any;
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

    render () {
        const { editShow=false, editData: data, list, onClose, intl } = this.props;
        return (
            <ExModal
                visible={editShow}
                title={`${data.id > 0 ? '修改' : '新增'}菜单信息`}
                onCancel={onClose}
                onOk={this.handleSave}
            >
                <EditForm
                    ref={this.saveFormRef}
                    data={data}
                    list={list}
                />
            </ExModal>
        );
    }
}

const EditModalComp = connect((state:any) => {
    const { editShow, editData, list } = state.menu;
    return { editShow, editData, list: [{ id: 0, name: '顶级菜单', indents: [] }].concat(list.filter((o:_Object) => !o.module)) };
}, dispatch => ({
    /**
     * 提交保存
     * @param data
     */
    onSubmit (data:any) {
        if (data.id > 0) {
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

export default EditModalComp;
