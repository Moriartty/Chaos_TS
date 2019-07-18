
import common from './common';
import operations from './operations';
import login from './login';
import systemConfig from './systemConfig';
import text from './text';

let zhCN = {};

export default Object.assign(
    zhCN,
    common,
    login,
    systemConfig,
    operations,
    text
);
