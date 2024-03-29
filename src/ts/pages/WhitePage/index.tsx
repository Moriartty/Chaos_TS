import { Button, Layout } from 'antd';
// import img from 'img/err404.png';
const img = require('img/crack.jpg');
const { Content } = Layout;
import * as React from 'react';

class WhitePage extends React.Component {
    render () {
        return (
            <Layout className="full-height" style={{  background: '#fff'}} tagName='main'>
                <Content className="page-error" style={{ textAlign: 'center' }} tagName="main">
                    <div>
                        <img src={img}/>
                    </div>
                    {/*<h1>404</h1>*/}
                    <h1 className="am-text-xl">页面施工中...</h1>
                    <p className="am-link-muted">
                        <Button type="primary" href="/">返回首页</Button>
                    </p>
                </Content>
            </Layout>
        );
    }
}

module.exports = WhitePage;
