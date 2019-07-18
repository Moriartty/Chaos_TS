
import common from './common';
import operations from './operations';
import login from './login';
import systemConfig from './systemConfig';
import text from './text';

let enUS = {};
export default Object.assign(
    enUS,
    common,
    login,
    systemConfig,
    operations,
    text
);
