import * as React from 'react';
import {_Object} from 'customInterface';
/**
 * 异常边界处理，暂时在界面中打印出错误信息，以便调试
 */

interface CompState {
    error?:Error|undefined,
    info?:React.ErrorInfo
}

class PotentialError extends React.Component<any,CompState>{
    constructor(props:any){
        super(props);
        this.state = {}
    }
    componentDidCatch(error:Error,info:React.ErrorInfo){
        this.setState({error,info});
    }
    render(){
        if(this.state.error){
            return (
                <div className={'potential-error-content'}>
                    <h1 style={{color:'red'}}>Error: {this.state.error.toString()}</h1>
                    {this.state.info &&
                    this.state.info.componentStack.split("\n").map((i:any) => {
                        return (
                            <div key={i}>
                                {i}
                            </div>
                        );
                    })}
                </div>
            )
        }
        return this.props.children;
    }
}
export default PotentialError;