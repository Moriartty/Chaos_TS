import { connect } from 'react-redux';
import appAction from 'actions/app';
import action from 'actions/profile';
import { Form, message, Button, Icon, Row, Col } from 'antd';
import {ExFormItem} from 'components/index';
import * as React from 'react';
import { _Object } from 'customInterface';

interface CompProps {
    userInfo?:_Object,
    form:any,
    roleList?:Array<_Object>,
    onSubmit?:Function,
    init:Function
}
interface CompState {
    loading?:boolean
}

class Profile extends React.Component<CompProps,CompState>{
    state={
        loading: false
    };

    componentDidMount(){
        this.props.init();
    }

    submit = (e:any) => {
        e.preventDefault();
        this.props.form.validateFields((err:any, data:_Object) => {
            if (err) {
                return;
            }
            data.birthday = data.birthday.format('YYYY-MM-DD');

            this.props.onSubmit.call(this, data);
        });
    };

    render () {
        const { userInfo: info, form,roleList } = this.props;
        const { getFieldDecorator } = form;
        return (
            <Form onSubmit={this.submit}>
                <fieldset>
                    <legend><Icon type="tag-o"/> 基本信息</legend>
                    <div style={{ maxWidth: 800 }}>
                        <ExFormItem label="姓名" type="static" initialValue={info.name}/>
                        <ExFormItem label="性别"
                            type="radio"
                            name="sex"
                            initialValue={info.sex}
                            list={[{ id: '男', name: '男' }, { id: '女', name: '女' }]}
                            getFieldDecorator={getFieldDecorator}/>
                        <ExFormItem label="生日"
                            type="date"
                            name="birthday"
                            initialValue={info.birthday}
                            getFieldDecorator={getFieldDecorator}/>
                        <ExFormItem label="籍贯"
                            name="nativePlace"
                            initialValue={info.nativePlace}
                            getFieldDecorator={getFieldDecorator}/>
                        <ExFormItem label="组织" type="static" initialValue={info.org}/>
                        <ExFormItem label="上次登录时间" type="static" initialValue={info.lastLogin}/>
                        <ExFormItem label="注册时间" type="static" initialValue={info.createTime}/>
                        <ExFormItem label="用户角色" type='select' name='role' list={roleList} getFieldDecorator={getFieldDecorator}/>
                    </div>
                </fieldset>
                <fieldset>
                    <legend><Icon type="tag-o"/> 联系方式</legend>
                    <div style={{ maxWidth: 800 }}>
                        <ExFormItem label="邮箱"
                            name="email"
                            initialValue={info.email}
                            getFieldDecorator={getFieldDecorator}/>
                        <ExFormItem label="电话"
                            name="phone"
                            initialValue={info.phone}
                            required
                            getFieldDecorator={getFieldDecorator}/>
                        <ExFormItem label="座机"
                            name="tel"
                            initialValue={info.tel}
                            getFieldDecorator={getFieldDecorator}/>
                        <ExFormItem label="住址"
                            type="textarea"
                            name="address"
                            initialValue={info.address}
                            getFieldDecorator={getFieldDecorator}/>
                    </div>
                </fieldset>
                <hr/>
                <div style={{ maxWidth: 800, marginTop: 24 }}>
                    <Row>
                        <Col span={18} offset={6}>
                            <Button type="primary" htmlType="submit" icon="save" size="large" loading={this.state.loading}>保存</Button>
                        </Col>
                    </Row>
                </div>
            </Form>
        );
    }
}

const ProfileComp = connect((state:any) => {
    const { userInfo } = state.app;
    const {roleList} = state.profile;
    return { userInfo,roleList };
}, dispatch => ({
    init(){
        dispatch(action.loadRoleList())
    },
    /**
     * 提交保存
     * @param data
     */
    onSubmit (data:_Object) {
        this.setState({ loading: true });
        dispatch(action.update(data)).then(() => {
            message.success('保存成功!');
            this.setState({ loading: false });
            dispatch(appAction.loadUserInfo());
        });
    }
    
}))(Form.create()(Profile));

module.exports = ProfileComp;
