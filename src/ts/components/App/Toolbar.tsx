import * as React from 'react';
import {Button} from 'antd';

interface CompProps {
    onRefresh?:any,
    children?:any,
    bodyStyle?:any
}

class Toolbar extends React.Component<CompProps>{
    render(){
        const {onRefresh,children,bodyStyle} = this.props;
        return (
            <div className={'toolbar'}>
                <div className={'left'} style={bodyStyle}>
                    {children}
                </div>
                <div className={'right'}>
                    <Button type={'primary'} onClick={onRefresh} icon={'reload'} href="">刷新</Button>
                </div>
            </div>
        )
    }
}
export default Toolbar;