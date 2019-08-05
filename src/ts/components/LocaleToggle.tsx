import * as React from 'react';
import { Radio,Dropdown,Menu,Icon } from 'antd';
import action from 'actions/app';
import { connect } from 'react-redux';
import {_Object} from 'customInterface';

interface CompProps {
    locale?:string,
    changeLocale:Function
}

const LanguageMap:_Object = {
    'en-US':'English',
    'zh-CN':'中文'
};

class LocaleToggle extends React.Component<CompProps> {
    constructor(props:CompProps){
        super(props);
    }
    handleClick = (item:_Object,e:any) => {
        this.props.changeLocale(item.key);
    }
    render () {
        const curLocale = this.props.locale;
        const menu = (
            <Menu onClick={(item)=>this.handleClick.call(this,item)}>
                <Menu.Item key={'en-US'}><a>{LanguageMap['en-US']}</a></Menu.Item>
                <Menu.Item key={'zh-CN'}><a>{LanguageMap['zh-CN']}</a></Menu.Item>
            </Menu>
        );
        return (
            <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" href="javascript:;">
                    {LanguageMap[curLocale]} <Icon type="down" />
                </a>
            </Dropdown>

        );
    }
}

const LocaleToggleComp = connect((state:any) => {
    const { locale } = state.app;
    return { locale };
}, dispatch => ({
    changeLocale (key:string) {
        const localeValue = key;
        dispatch(action.toggleLocale(localeValue));
    }
}))(LocaleToggle);

export default LocaleToggleComp;
