import {Card,Row,Col} from 'antd';
import {connect} from 'react-redux';
import action from 'actions/home';
import * as React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

interface CompProps {
    init:Function,
    intl:any,
    availableSystem:Array<any>
}

class Home extends React.Component<CompProps>{
    componentDidMount(){
        this.props.init();
    }
    render(){
        const {availableSystem} = this.props;
        const intl = this.props.intl;
        return (
            <Row>
                {
                    availableSystem.map(o=>{
                        return (
                            <Col xxl={6} lg={8} md={12}  style={{display:'flex',justifyContent:'center',marginBottom:'20px'}} key={o.systemName}>
                                <Card
                                    hoverable
                                    style={{ width: 280,borderRadius:200 }}
                                    key={o.systemName}
                                    onClick={()=>location.href = o.systemUrl}
                                    cover={<img alt="example" src={require('../../../img/logo.svg')} />}
                                >
                                    <div style={{display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
                                        <b>{intl.formatMessage({ id: o.name })}</b>
                                        <span>{o.description}</span>
                                    </div>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        )
    }
}

let HomeComponent = connect((state:any)=>{
    const {availableSystem} = state['home'];
    return {availableSystem};
},dispatch=>({
    init(){
        dispatch(action.loadAllSystem(0));
    }
}))(Home)


module.exports = injectIntl(HomeComponent);