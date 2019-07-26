import * as React from 'react';
import { connect } from 'react-redux';
import action from 'actions/app';
import { Form, Icon, Input, Button, Checkbox, Tabs, Alert,Row,Col } from 'antd';
// import ReactCanvasNest from 'components/react-canvas-nest';
import {EvanYou,LocaleToggle,ExFormItem} from 'components/index';
const headerIcon = require('img/bg2.png');
import { FormattedMessage, injectIntl } from 'react-intl';

import 'less/login';
import { _Object } from 'customInterface';

interface CompProps {
    form:any,
    onLogin:Function,
    onRegister:Function,
    locale:string,
    intl:any,
    authenticate:Function,
    section?:Array<_Object>
}
interface CompState {
    showIncorrect?: boolean,
    loading?: boolean
}

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const configs = {
    pointColor: '105,192,255 ',
    pointR: 5,
    pointOpacity: 0.4,
    lineColor: '105,192,255',
    count: '55',
    dist: '10000'
};

class Login extends React.Component<CompProps,CompState> {
    state = {
        showIncorrect: false,
        loading: false
    };

    handleSubmit = (e:any) => {
        e.preventDefault();
        this.props.form.validateFields((err:any, data:Object) => {
            if (!err) {
                this.setState({ loading: true });
                this.props.onLogin.call(this, data);
            }
        });
    };

    handleRegister = () => {
        this.props.form.validateFields((err:any,data:Object)=>{
            if(!err){
                this.props.onRegister(data);
            }
        })
    };


    render () {
        const { getFieldDecorator } = this.props.form;
        const {locale,section} = this.props;
        const intl = this.props.intl;
        return (
            <div style={{ height: '100%' }}>
                {/* <ReactCanvasNest config = {configs} style = {{ zIndex: -2 }}/> */}
                <EvanYou/>
                <div className="banner">
                    <div className="title">
                        <img src={locale=='zh-CN'?APP_LOGO_ZH:APP_LOGO_EN}/>
                        {/* <span className="appName"><FormattedMessage id="app_name"/></span> */}
                    </div>
                    <div className={'languageToggle'}>
                        <LocaleToggle/>
                    </div>
                </div>
                <div className="login">
                    <div>
                        <div className="title">
                            <img src={headerIcon}/>
                            <div className="split"></div>
                        </div>
                        <Form onSubmit={this.handleSubmit} className="main">
                            <Tabs defaultActiveKey="1" animated={false}>
                                <TabPane tab={<FormattedMessage id="login_index_msg1" />} key="1">
                                    <FormItem>
                                        {/* 这应该是个bug,getFieldDecorator的id必须设置为FormattedMessage的id才能找到对应字段 */}
                                        {getFieldDecorator('username', {
                                            rules: [{ required: true, message: <FormattedMessage id="login_index_msg2"/> }]
                                        })(
                                            <Input size="large"
                                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                placeholder={intl.formatMessage({ id: 'login_index_msg3' })} />
                                        )}
                                    </FormItem>
                                    <FormItem>
                                        {getFieldDecorator('password', {
                                            rules: [{ required: true, message: <FormattedMessage id="login_index_msg4"/> }]
                                        })(
                                            <Input size="large"
                                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                onChange={() => { this.state.showIncorrect && this.setState({ showIncorrect: false }); }}
                                                type="password"
                                                placeholder={intl.formatMessage({ id: 'login_index_msg5' })} />
                                        )}
                                    </FormItem>
                                    {this.state.showIncorrect && <Alert message={<FormattedMessage id={'login_index_msg6'}/>} type="error" showIcon />}
                                </TabPane>
                            </Tabs>
                            <div>
                                <Row>
                                    <Col span={12}>
                                        <FormItem>
                                            {getFieldDecorator('remember', {
                                                valuePropName: 'checked',
                                                initialValue: true
                                            })(
                                                <Checkbox><FormattedMessage id={'login_index_msg7'}/></Checkbox>
                                            )}
                                        </FormItem>
                                    </Col>
                                    <Col span={12}>
                                        <ExFormItem  
                                            type={'select'} 
                                            list={section} 
                                            placeholder={intl.formatMessage({id:"login_index_msg9"})}
                                            name={'section'} 
                                            style={{width:232}}
                                            getFieldDecorator={getFieldDecorator} 
                                            required
                                            />
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <Col span={24}>
                                        <Button size="large" type="primary" htmlType="submit" icon="login" loading={this.state.loading}>
                                            <FormattedMessage id={'login_index_msg8'}/>
                                        </Button>
                                    </Col>
                                </Row>
                            </div>
                        </Form>
                    </div>
                    <div className="login-copyright">
                        <span><FormattedMessage id={'copyright'}/> © 2018 All Rights Reserved <FormattedMessage id={'app_name'}/></span>
                    </div>
                </div>
            </div>
        );
    }
}

let LoginComp = connect((state:any)=>{
    const {locale,section} = state.app;
    return {locale,section}
}, dispatch => ({
    /**
     * 登录
     * @param data
     */
    onLogin (data:any) {
        this.setState({ showIncorrect: false });
        //登陆后再验证cookie，然后跳转
        dispatch(action.login(data.username, data.password,data.section, data.remember)).
            then(()=>{
                //登陆完再进行一次验证
                return dispatch(action.isExpiration())
            }).
            then(()=>{
                // 跳转
                location.href = 'index.html';
            }).
            catch((msg:any) => {this.setState({ loading: false, showIncorrect: true });}
        );
    }
}))(Form.create()(Login));

module.exports = injectIntl(LoginComp);
