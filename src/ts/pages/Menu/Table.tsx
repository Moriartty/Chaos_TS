import { connect } from 'react-redux';
import action from 'actions/menu';
import ExTable from 'components/ExTable';
import { Badge, Tag, Divider, Popconfirm } from 'antd';
import {CircleBtn} from 'components/index';
import { FormattedMessage } from 'react-intl';
import * as React from 'react';
import { _Object } from 'customInterface'; 

interface CompProps {
    operations:any, 
    onMove:Function, 
    onSubAdd:Function, 
    onSubEdit:Function, 
    onDelete:Function,
    loading:boolean,
    list:any
}

class Table extends React.Component<CompProps> {
    private columns:Array<Object>

    constructor (props:CompProps) {
        super(props);
        const { operations, onMove, onSubAdd, onSubEdit, onDelete } = this.props;
        this.columns = [
            { title: '根菜单',
                dataIndex: 'name',  
                render: (value:any, data:_Object) => (
                    <div>
                        {
                            data.indents.map((indent:any, i:any) => <span key={i} className="indent">{indent}</span>)
                        }
                        <Tag color={['purple', 'blue', 'cyan', 'green'][data.indents.length - 1]} style={{ marginLeft: 8 }}><FormattedMessage id={value}/></Tag>
                        {/* <CircleBtn onClick={onMove.bind(this, data.id, true)} title="上移" icon="arrow-up"/>
                        <CircleBtn onClick={onMove.bind(this, data.id, false)} title="下移" icon="arrow-down"/> */}
                        {
                            data.type!='4' && <CircleBtn title="添加子菜单" icon="plus" onClick={onSubAdd.bind(this, data)}/>
                        }
                    </div>
                )
            },
            { title: '菜单标签', dataIndex: 'module', render: (value:any) => value && <Tag color="geekblue">{value}</Tag> },
            { title: '描述', dataIndex:'description'},
            { title: '状态', dataIndex: 'display', render: (value:any) => value === 1 ? <Badge status="success" text="显示"/> : <Badge status="default" text="隐藏"/> }
        ];

        if (operations.include('menu_operation_update', 'menu_operation_delete')) {
            this.columns.push({
                title: '操作',
                render: (value:any, data:any) => {
                    let actions:Array<any> = [];
                    if (operations.include('menu_operation_update')) {
                        actions.push(<a key="b1" onClick={onSubEdit.bind(this, data)}><FormattedMessage id={'menu_operation_edit'}/></a>);
                    }
                    if (operations.include('menu_operation_delete')) {
                        actions.push(
                            <Popconfirm key="b2" placement="left" title="确定删除该菜单吗？（其子菜单将一并删除！）" onConfirm={onDelete.bind(this, data.id)}>
                                <a><FormattedMessage id={'menu_operation_delete'}/></a>
                            </Popconfirm>
                        );
                    }
                    return <div>{actions.joinItem((i:any) => <Divider key={i} type="vertical"/>)}</div>;
                }
            });
        }
    }

    render () {
        const {loading,list} = this.props;
        return (
            <ExTable
                loading={loading}
                columns={this.columns}
                dataSource={list}
                rowKey='oid'
            />
        );
    }
}

const TableComp = connect((state:any) => {
    const operations = state.app.menuObj['systemConfig/menu'].functions;
    const { list, loading } = state.menu;
    return { operations, list, loading };
}, dispatch => ({
    /**
     * 删除菜单
     * @param id
     */
    onDelete (id:any) {
        dispatch(action.deleteMenu(id));
    },
    /**
     * 菜单排序
     * @param id
     * @param isUp
     */
    onMove (id:any, isUp:any) {
        dispatch(action.moveMenu(id, isUp)).then(() => {
            dispatch(action.loadList());
        });
    }
}))(Table);

export default TableComp;
