import {Card,Row,Col} from 'antd';
import {connect} from 'react-redux';
import action from 'actions/home';
import * as React from 'react';

interface CompProps {
    init:Function,
    availableSystem:Array<any>
}

class Home extends React.Component<CompProps>{
    componentDidMount(){
        this.props.init();
    }
    render(){
        const {availableSystem} = this.props;
        return (
            <Row>
                {
                    availableSystem.map(o=>{
                        return (
                            <Col xxl={6} lg={8} md={12}  style={{display:'flex',justifyContent:'center',marginBottom:'20px'}} key={o.systemName}>
                                <Card
                                    hoverable
                                    style={{ width: 280 }}
                                    key={o.systemName}
                                    onClick={()=>location.href = o.systemUrl}
                                    cover={<img alt="example" src={require('../../../img/logo.svg')} />}
                                >
                                    <Card.Meta title={o.systemName} description={o.systemUrl} />
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        )
    }
}

const HomeComponent = connect((state:any)=>{
    const {availableSystem} = state['home'];
    return {availableSystem};
},dispatch=>({
    init(){
        dispatch(action.loadAllSystem(0));
    }
}))(Home)


module.exports = HomeComponent;