// import goTop from 'tf-utils/dom/goTop';
import * as React from 'react';
import { Icon,Button } from 'antd';
import { FormattedMessage } from 'react-intl';
import Overlay from 'components/Overlay';
const glo = require('../../../myDeclareFile')

interface CompProps {

}
interface CompState {
    overlayActive:boolean
}

class Copyright extends React.PureComponent<{},CompState> {

    constructor(props:any){
        super(props);
        this.state = {overlayActive: false}
    }
    closeOverlay = () => {
        this.setState({ overlayActive: false })
    }
    showOverlay = () => {
        this.setState({ overlayActive: true })
    }
    render () {
        return (
            <div className='copyright'>
                <span><FormattedMessage id={'copyright'}/> © 2018 All Rights Reserved {glo.APP_NAME}</span>

                {this.state.overlayActive &&
                <Overlay
                    onClose={this.closeOverlay}
                    style={{
                        width:360,
                        height:300,
                        backgroundColor:'#fff'
                    }}
                    overlayCloseStyle={{
                        color:'black',
                        fontSize:20
                    }}
                >
                    overlay content
                </Overlay>}
                <a  className={'btn systemInfo'} onClick={this.showOverlay}>
                    <Icon type={'search'}/>
                </a>

                {/*<a href="javascript:;"*/}
                    {/*onClick={() => { goTop(document.querySelector('.ant-tabs-tabpane-active.page-pane')); }}*/}
                    {/*title="返回顶部"*/}
                    {/*className="btn goTop">*/}
                    {/*<Icon type="up"/>*/}
                {/*</a>*/}
            </div>
        );
    }
}

export default Copyright;
