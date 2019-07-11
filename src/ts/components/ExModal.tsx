import { Modal } from 'antd';
import {_Object} from '../interface';
import * as React from 'react';

export default function ExModal (props:_Object) {
    return (
        <Modal
            maskClosable={false}
            destroyOnClose={!props.storeOnClose}
            {...props}
        >
            {props.children}
        </Modal>
    );
}
