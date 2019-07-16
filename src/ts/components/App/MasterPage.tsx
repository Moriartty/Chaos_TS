import * as React from 'react';
import { connect } from 'react-redux';
import { Layout, Tabs, Icon } from 'antd';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import Copyright from './Copyright';
import action from 'actions/app';
import openNotification from 'components/ExNotification';
import PotentialError from 'components/PotentialError';
import { FormattedMessage } from 'react-intl';

const TabPane = Tabs.TabPane;

interface CompProps {
    onWillMount:Function,
    closeNotification:Function,
    panes:Array<any>,
    activeTab:string,
    onTabChange:Function,
    showNotification:Function,
    notification:any,
    onTabRemove:Function

}
interface CompState {

}

class MasterPage extends React.Component<CompProps,CompState> {

    componentWillMount () {
        this.props.onWillMount();
    }

    componentWillReceiveProps (nextProps:CompProps) {
        if (nextProps.showNotification) {
            openNotification(nextProps.notification);
            // 在开启notification后立即将show置为false,放置页面props改变时因为show=true而出现多个notification
            this.props.closeNotification();
            return false;
        }
    }
    // 使用这种写法等价于将onEdit绑定到this上
    onEdit = (targetKey:string, action:string) => {
        action === 'remove' && this.removeTab(targetKey);
    };

    removeTab = (targetKey:string) => {
        let { panes, activeTab, onTabRemove } = this.props;
        const index = panes.findIndex(o => o.key === targetKey);

        const isCurrentTab = activeTab === targetKey;
        // 允许关闭所有Tab页
        if (isCurrentTab && panes.length > 1) {
            // 是否最后一个，是则激活前一个，否则激活后一个
            if (index === panes.length - 1) {
                activeTab = panes[panes.length - 2].key;
            } else {
                activeTab = panes[index + 1].key;
            }
        }

        // 删除tab
        panes.splice(index, 1);

        onTabRemove(panes.concat(), activeTab);
    };

    render () {
        const { panes, activeTab, onTabChange } = this.props;
        return (
            <Layout className="full-height" tagName='main'>
                {/*<Topbar/>*/}
                <Layout tagName='main'>
                    {
                        <Sidebar/>
                    }
                    <Layout tagName='main'>
                        <Topbar/>
                        <Tabs
                            hideAdd
                            className="page-tabs flex-grow-1 display-flex flex-column"
                            onChange={(key)=>onTabChange(key)}
                            activeKey={activeTab}
                            type="editable-card"
                            onEdit={this.onEdit}
                        >
                            {
                                panes.map(pane => <TabPane className="page-pane"
                                                           tab={<span><Icon type={pane.icon}/><FormattedMessage id={pane.title}/></span>}
                                                           key={pane.key}
                                                           // closable={pane.key !== 'home'}
                                >
                                    <PotentialError>
                                    {pane.component}
                                    </PotentialError>
                                    </TabPane>)
                            }
                        </Tabs>
                        {/*<Copyright/>*/}
                    </Layout>
                </Layout>
            </Layout>
        );
    }

}

const MasterPageComponent = connect((state:any) => {
    const { panes, activeTab, showNotification, notification } = state.app;
    return { panes, activeTab, showNotification, notification };
}, dispatch => ({
    onTabChange (key:string) {
        dispatch({ type: 'APP_TAB_SWITCH', key });
        key === 'home' && dispatch({ type: 'APP_ENTRY_MENU_SET' });
    },
    onTabRemove (panes:Array<any>, key:string) {
        dispatch({ type: 'APP_TAB_CHANGE', panes, key });
    },
    /**
     * componentWillUnmount
     */
    onWillMount () {
        const userInfoPromise = dispatch(action.loadUserInfo());
        const menuPromise = dispatch(action.loadUserMenu());
        Promise.all([userInfoPromise, menuPromise]).then(results => {
            // 所有首屏需要加载的数据已经加载完成，效果比起componentDidMount更合理
            // 首屏加载完时移除
            if (document.getElementById('initLoading')) { document.body.removeChild(document.getElementById('initLoading')); }
            // dispatch(action.getActivityCount());
            // 加载常用模块,暂时没有
            // dispatch(action.loadEntryMenu());
            // //加载日期信息
            // dispatch(action.loadDataInfo());
        });
    },
    closeNotification () {
        dispatch({ type: 'APP_SHOW_NOTIFICATION', obj: { show: false } });
    }
}))(MasterPage);

export default MasterPageComponent;
