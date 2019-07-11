/**
 * React v16 createPortal的简单应用
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
require('less/components/overLay.less');

interface CompProps {
    style:any,
    onClose:any,
    overlayCloseStyle:any
}
// interface _Overlay extends React.Component{
//     container:any
// }


class Overlay extends React.Component<CompProps>{
    
    private container:HTMLElement;

    constructor(props:any){
        super(props);
        this.container = document.createElement('div');
        document.body.appendChild(this.container);
    }
    componentWillMount(){
        document.body.style.overflow = 'hidden';
        // $(document.body).css('overflow','hidden')
    }
    componentWillUnmount(){
        // $(document.body).css('overflow','auto')
        document.body.style.overflow = 'auto';
        document.body.removeChild(this.container);
    }
    render(){
        const {width,height} = this.props.style;
        const marginLeft = width==='100%'?-document.body.clientWidth/2:-width/2,
            marginTop = height==='100%'?-document.body.clientHeight/2:-height/2;
        return ReactDOM.createPortal(
            <div className={'overlay'} style={{...this.props.style,marginLeft,marginTop}}>
                <div className={'overlay-top'}>
                    <span className='overlay-close' onClick={this.props.onClose} style={this.props.overlayCloseStyle}>&times;</span>
                </div>
                <div className={'overlay-content'}>
                    {this.props.children}
                </div>
            </div>,
            this.container
        )
    }
}

export default Overlay;