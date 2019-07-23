import { Table, Input } from 'antd';
import {_Object} from 'customInterface';
import * as React from 'react';

interface tableProps {
    columns?:Array<any>, 
    scrollX?:any, 
    scrollY?:any,
    pageNo?:number, 
    pageSize?:number, 
    dataCount?:number, 
    onPageChange?:Function, 
    onPageSizeChange?:Function, 
    tableSize?:any,
    [key:string]:any
}

export default function ExTable (props:tableProps) {
    const {
        columns, scrollX, scrollY,
        pageNo, pageSize, dataCount, onPageChange, onPageSizeChange, tableSize
    } = props;
    // 不传dataCount时则不分页
    let paginationOptions:_Object;
    if (dataCount) {
        paginationOptions = {
            showSizeChanger: true,
            showQuickJumper: true,
            pageSize,
            current: pageNo,
            total: dataCount,
            showTotal: (total:number, range:Array<any>) => `当前显示 ${range[0]}-${range[1]}，共 ${total} 条记录`
        };
        if (onPageChange) {
            paginationOptions.onChange = onPageChange;
            paginationOptions.onShowSizeChange = onPageSizeChange;
        }
    }
    return (
        <Table rowKey="id"
            pagination={paginationOptions}
            // 设置了scrollY可以使表头固定，但会使表头与表格内容不对齐，奇怪！
            // scroll={{x:scrollX||Math.max(columns.reduce((a, b) => {
            //     return {width:(a.width||100)+(b.width||100)}; //默认宽度，防止被挤到一块
            // }).width, 1200), y:scrollY}}
            size={tableSize || 'middle'}
            {...props}/>
    );
}

interface cellProps {
    editable?:boolean, 
    type?:string, 
    value?:any, 
    addonBefore?:any, 
    formatter?:any, 
    min?:number, 
    step?:any, 
    onChange?:Function
}

export function EditableCell (props:cellProps) {
    let { editable, type, value, addonBefore, formatter, min, step, onChange } = props;
    return (
        <div>
            {editable
                ? <Input style={{ margin: '-5px 0' }}
                    type={type}
                    min={min}
                    step={step}
                    addonBefore={addonBefore}
                    value={value}
                    onChange={e => onChange(e.target.value)} />
                : formatter ? formatter(value) : value
            }
        </div>
    );
}
