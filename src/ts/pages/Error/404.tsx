import { Button, Layout } from 'antd';
import * as React from 'react';
// import img from 'img/err404.png';
// import img from 'img/crack.jpg';
const { Content } = Layout;
const pic = require('img/crack.jpg');

class Err404 extends React.Component {
    render () {
        return (
            <Layout className="full-height" tagName='main'>
                <Content className="page-error" style={{ textAlign: 'center' }} tagName='main'>
                    <div>
                        <img src={pic}/>
                    </div>
                    <h1>404</h1>
                    <h3 className="am-text-xl">抱歉，你访问的页面不存在</h3>
                    <p className="am-link-muted">
                        <Button type="primary" href="/">返回首页</Button>
                    </p>
                </Content>
            </Layout>
        );
    }
}

module.exports = Err404;
