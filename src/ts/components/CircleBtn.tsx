import { Button } from 'antd';
import * as React from 'react';

interface CompProps {
    title?:string,
    icon?:any,
    onClick?:Function
}

class CircleBtn extends React.PureComponent<CompProps> {
    render () {
        const { title, icon, onClick } = this.props;
        return (
            <Button
                title={title}
                shape="circle"
                icon={icon}
                size="small"
                onClick={()=>onClick()}
                className="margin-left-sm"/>
        );
    }
}

export default CircleBtn;
