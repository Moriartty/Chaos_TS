import * as React from 'react';
import { connect } from 'react-redux';

interface CompProps {
    info?:any
}

class SidebarDate extends React.Component<CompProps> {
    render () {
        const { info } = this.props;

        if (!info.year) {
            return null;
        }

        return (
            <div className="sidebar-date">
                {info.year}年{info.month}月{info.day}日<br/>
                {info.term}学期 第{info.week}周
            </div>
        );
    }
}

const SidebarDateComponent = connect((state:any) => {
    const { dateInfo: info } = state.app;
    return { info };
})(SidebarDate);

export default SidebarDateComponent;
