import { connect } from 'react-redux';
import action from 'actions/user';
import ExModal from 'components/ExModal';
import ExFormItem from 'components/ExFormItem';
import { Form } from 'antd';
import * as React from 'react';
import { _Object } from 'customInterface';

interface modalProps {
    orgEditShow?:boolean, 
    orgEditData?: any, 
    orgList?:Array<any>, 
    onClose?:Function,
    onSubmit?:Function,
    [key:string]:any
}

interface formProps {
    data?:_Object,
    orgList?:Array<any>,
    [key:string]:any
}

const EditForm:any = Form.create()((props:formProps) => {
    const { data, orgList, form } = props;
    const { getFieldDecorator } = form;
    return (
        <Form>
            <ExFormItem label="上级组织"
                type="select"
                name="parentId"
                initialValue={data.parentId || 0}
                list={[{ id: 0, name: '（根节点）' }].concat(orgList.map(o => ({ id: o.id, name: o.indents.join(' ') + ' ' + o.name })))}
                placeholder="请选择"
                required
                getFieldDecorator={getFieldDecorator}/>
            <ExFormItem label="组织名称"
                name="name"
                initialValue={data.name}
                required
                getFieldDecorator={getFieldDecorator}/>
            <ExFormItem type="hidden"
                name="id"
                initialValue={data.id}
                getFieldDecorator={getFieldDecorator}/>
        </Form>
    );
});

class OrgEditModal extends React.Component<modalProps> {
    form:any;
    handleSave = () => {
        const form = this.form;
        form.validateFields((err:any, data:any) => {
            if (err) {
                return;
            }

            this.props.onSubmit.call(this, data);
            form.resetFields();
            this.props.onClose();
        });
    };

    saveFormRef = (form:any) => {
        this.form = form;
    };

    render () {
        const { orgEditShow, orgEditData: data, orgList, onClose } = this.props;
        return (
            <ExModal
                visible={orgEditShow}
                title={`${data.id > 0 ? '修改' : '新增'}组织信息`}
                onCancel={onClose}
                onOk={this.handleSave}
            >
                <EditForm
                    ref={this.saveFormRef}
                    orgList={orgList}
                    data={data}
                />
            </ExModal>
        );
    }
}

const OrgEditModalComp = connect((state:any) => {
    const { orgEditShow, orgEditData, orgList } = state['user'];
    return { orgEditShow, orgEditData, orgList };
}, dispatch => ({
    /**
     * 提交保存
     * @param data
     */
    onSubmit (data:_Object) {
        data.parentId = data.parentId == 0 ? '' : data.parentId;
        if (data.id > 0) {
            dispatch(action.updateOrg(data)).then(() => {
                this.props.onClose();
                // 重新加载列表
                dispatch(action.loadOrgData());
            });
        } else {
            dispatch(action.addOrg(data)).then(() => {
                this.props.onClose();
                // 重新加载列表
                dispatch(action.loadOrgData());
            });
        }
    },
    /**
     * 关闭
     */
    onClose () {
        dispatch({ type: 'USER_ORG_EDIT_CLOSE' });
    }
}))(OrgEditModal);

export default OrgEditModalComp;
