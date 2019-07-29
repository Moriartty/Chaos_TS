import { connect } from 'react-redux';
import action from 'actions/role';
import { Button, Icon, message } from 'antd';
import { FormattedMessage } from 'react-intl';
import * as React from 'react';
import { _Object } from 'customInterface';
import { hasChildInTree } from 'utils/index';

const levelColors = ['#eb2f96', '#fa8c16', '#13c2c2', '#2f54eb', '#fa541c'];

interface CompProps {
    roleAuth:Array<any>,
    onCheckChange?:Function,
    operations?:Array<any>, 
    menuTree?:any, 
    roleInfo?:_Object,  
    onSave?:Function
}
interface CompState {
    roleAuth:Array<any>
}

class RoleMenu extends React.Component<CompProps,CompState> {
    constructor(props:CompProps){
        super(props);
        this.state = {
            roleAuth:props.roleAuth.concat()
        }
        
    }
    componentWillReceiveProps(nextProps:CompProps){
        //新props不同于旧props时需要更新state
        if(nextProps.roleAuth.length===this.props.roleAuth.length){
            let flag:boolean = true;
            nextProps.roleAuth.forEach(o=>{
                if(this.props.roleAuth.indexOf(o)<0)
                    flag = false;
            })
            !flag&&this.setState({roleAuth:nextProps.roleAuth.concat()});
        }else{
            this.setState({roleAuth:nextProps.roleAuth.concat()});
        }
    }
    /**
     * 折叠/展开
     * @param e
     */
    collapse (e:any) {
        const $this = $(e.currentTarget);
        const $subList = $this.closest('.menu-name').next('ul');
        if ($subList.is(':visible')) {
            $this.html('<i class="anticon anticon-plus-square-o">' +
                '<svg viewBox="64 64 896 896" class="" data-icon="plus-square" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"></path><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path></svg>' +
                '</i>');
            $subList.slideUp('fast');
        } else {
            $this.html('<i class="anticon anticon-minus-square-o">' +
                '<svg viewBox="64 64 896 896" class="" data-icon="minus-square" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"></path><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path></svg>' +
                '</i>');
            $subList.slideDown('fast');
        }
    }

    /**
     * 勾选复选框
     * @param e
     */
    handleCheckChange (e:any) {
        let roleAuth = this.state.roleAuth.concat();
        const t = e.currentTarget;
        const $this = $(t);
        let changedMenuIds = [t.value]; // 有改变的菜单
        // 下级联动（一次性选择）
        $this.closest('.menu-name').next('ul').find('input').each(function (i:number, chk:_Object) {
            changedMenuIds.push(chk.value);
        });

        // 上级联动（逐层遍历判断）
        const recursive = function ($chk:any, checked:boolean) {
            var $parentChk = $chk.closest('ul').prev('.menu-name').find('input');
            if ($parentChk.length) {
                // 判断当前级所有复选框，如果全部没勾则父节点不勾，否则父节点打勾
                if (checked) {
                    const parentId = $parentChk.val();
                    if (!~roleAuth.indexOf(parentId)) {
                        changedMenuIds.push(parentId);
                    }
                    // 有一个勾上的话其他兄弟节点就没必要遍历了
                    recursive($parentChk, true);
                } else {
                    var hasCheck = false;
                    $chk.closest('li').siblings('li').find('input').each(function (i:number, chk:_Object) {
                        if (chk.checked) {
                            hasCheck = true;
                            return false;
                        }
                    });
                    if (!hasCheck) {
                        changedMenuIds.push($parentChk.val());
                    }
                    recursive($parentChk, hasCheck);
                }
            }
        };
        recursive($this, t.checked);

        if (t.checked) {
            roleAuth = roleAuth.concat(changedMenuIds);
        } else {
            changedMenuIds.forEach((menuId) => {
                let i = roleAuth.indexOf(menuId);
                if (~i) {
                    roleAuth.splice(i, 1);
                }
            });
        }
        // this.props.onCheckChange(roleAuth);
        this.setState({roleAuth})
    }

    /**
     * 渲染子节点
     * @param item
     * @returns {XML}
     */
    renderItem (item:_Object) {
        const indents = item.indents;
        const list = item.list;
        const roleMenuIds = this.state.roleAuth;
        return (
            <li key={item.index}>
                <div className="no-select menu-name">
                    {
                        indents.map((indent:any, index:number) => {
                            return (
                                <span key={index} className="indent">
                                    {
                                        index === (indents.length - 1) && list && list.length ? (
                                            <a onClick={this.collapse.bind(this)} className="cursor-pointer collapse">
                                                <Icon type="minus-square-o"/>
                                            </a>
                                        ) : indent
                                    }
                                </span>
                            );
                        })
                    }
                    <label className="cursor-pointer">
                        <input type="checkbox"
                            checked={hasChildInTree(item,roleMenuIds)}
                            //因为后端只需要记录操作的变化，所以为了方便筛选，这里我们只为type==4的赋值value
                            value={item.type==4?item.id:''}
                            onChange={this.handleCheckChange.bind(this)}/>
                        {/* eslint-disable-next-line */}
                        <span style={{ color: item.type == '4' ? '#666' : levelColors[indents.length] }}>
                            <FormattedMessage id={item.name}/>
                        </span>
                    </label>
                </div>
                {
                    list && list.length > 0 && (
                        <ul className="unstyled">
                            {
                                list.map((o:_Object, i:number) => {
                                    o.index = i;
                                    return this.renderItem(o);
                                })
                            }
                        </ul>
                    )
                }
            </li>
        );
    }

    render () {
        const { operations, menuTree, roleInfo,  onSave } = this.props;
        const {roleAuth} = this.state;
        return (
            <div className="role-menu">
                <ul className="unstyled">
                    {
                        menuTree.map((o:_Object, i:number) => {
                            o.index = i;
                            return this.renderItem(o);
                        })
                    }
                </ul>
                {
                    operations.indexOf('role_operation_modify') >= 0 && (
                        <Button type="primary" icon="save" className="save" onClick={onSave.bind(this, roleInfo.rid, roleAuth,this.props.roleAuth)}>保存</Button>
                    )
                }
            </div>
        );
    }
}

const RoleMenuComp = connect((state:any) => {
    const operations = state.app.menuObj['systemConfig/role'].functions;
    const { menuTree, roleInfo } = state.role;
    return { operations, menuTree, roleInfo };
}, dispatch => ({
    /**
     * 保存
     * @param roleId
     * @param roleAuth
     */
    onSave (roleId:number, roleAuth:Array<any>,preRoleAuth:Array<any>) {
        // 格式转化
        // let obj:_Object = {}; // {6:[], 9:["CREATE","UPDATE"]}
        // roleAuth.forEach((id:any) => {
        //     // eslint-disable-next-line
        //     if (id != '0') { // 排除手动添加的
        //         const index = id.indexOf('_');
        //         if (~index) {
        //             // 操作权限类型
        //             const menuId = id.slice(0, index);
        //             if (!obj[menuId]) {
        //                 obj[menuId] = [];
        //             }
        //             obj[menuId].push(id.slice(index + 1));
        //         } else {
        //             if (!obj[id]) {
        //                 obj[id] = [];
        //             }
        //         }
        //     }
        // });
        // // 对象转数组
        // let data = [];
        // for (let menuId in obj) {
        //     data.push({
        //         menuId: menuId,
        //         functions: obj[menuId].length ? obj[menuId] : undefined
        //     });
        // }
        // console.log(data);
        // dispatch(action.updateRoleMenu(roleId, data)).then(() => {
        //     message.success('权限更改成功！');
        // });
        const curRoleAuth = roleAuth.filter(item=>item);
        const intersection = curRoleAuth.filter(item=>preRoleAuth.indexOf(item)>-1);
        const addOids = curRoleAuth.filter(item=>!intersection.some(i=>item===i));
        const delOids = preRoleAuth.filter(item=>!intersection.some(i=>item===i));
        const params = {
            addOids,delOids
        }
        dispatch(action.updateRoleMenu(roleId, params)).then(() => {
            message.success('权限更改成功！');
        });

    }
}))(RoleMenu);

export default RoleMenuComp;
