export default {
    'systemConfig/role': {
        name: 'menuName_systemConfig_role',
        icon: 'bars',
        operations: [
            { name: 'role_operation_view' },
            { name: 'role_operation_add' },
            { name: 'role_operation_modify' },
            { name: 'role_operation_delete' }
        ],
        page: (cb:Function) => { require.ensure([], require => { cb(require('pages/Role')); } , null , 'role'); }
    },
    'systemConfig/menu': {
        name: 'menuName_systemConfig_menu',
        icon: 'bars',
        operations: [
            { name: 'menu_operation_view' },
            { name: 'menu_operation_add' },
            { name: 'menu_operation_update' },
            { name: 'menu_operation_edit' },
            { name: 'menu_operation_delete' }
        ],
        page: (cb:Function) => { require.ensure([], require => { cb(require('pages/Menu')); }, null , 'menu'); }
    },
    'systemConfig/user': {
        name: 'menuName_systemConfig_user',
        icon: 'contacts',
        operations: [
            { name: 'user_operation_view' },
            { name: 'user_operation_add' },
            { name: 'user_operation_modify' },
            { name: 'user_operation_delete' },
            { name: 'user_operation_addStaff' },
            { name: 'user_operation_addOrg' },
            { name: 'user_operation_reset' },
            { name: 'user_operation_leave' }
        ],
        page: (cb:Function) => { require.ensure([], require => { cb(require('pages/User')); }, null , 'user'); }
    },
    'systemConfig/fieldTranslation': {
        name: 'menuName_systemConfig_fieldTranslation',
        icon: 'contacts',
        operations: [
            { name: 'fieldTranslation_operation_view' },
            { name: 'fieldTranslation_operation_add' },
            { name: 'fieldTranslation_operation_modify' },
            { name: 'fieldTranslation_operation_delete' }
        ],
        page: (cb:Function) => { require.ensure([], require => { cb(require('pages/FieldTranslation')); }, null , 'fieldTranslation'); }
    },
};
