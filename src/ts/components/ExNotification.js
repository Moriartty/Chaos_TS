import { notification } from 'antd';
import {_Object} from 'customInterface';


const openNotificationWithIcon = (params) => {
    notification[type]({
        message: params.msg,
        description: params.desc,
        duration: params.duration
    });
};

export default openNotificationWithIcon;
