module.exports = [
    {
        desc: '获取角色列表',
        type: 'GET',
        url: '/role',
        params: '需要根据当前登录角色判断返回数据',
        result: {
            'code': '0',
            'data': [
                { id: 1, name: '用户', desc: '也被称作用户管理员。' },
                { id: 2, name: 'UE', desc: '也被称作用户管理员。' },
                { id: 3, name: 'SWE', desc: '也被称作用户管理员。' },
                { id: 4, name: 'SQE', desc: '也被称作用户管理员。' },
                { id: 5, name: '管理员', desc: '系统管理员。' }
            ]
        }
    },
    {
        desc: '获取指定角色有哪些菜单权限',
        type: 'GET',
        url: '/role/auth',
        params: {
            systemId:'',
            id: '角色ID',
        },
        result: {
            code: '0',
            data: [
                {
                    oid:1000,
                    pid:1,
                    type:'4',
                    name:'home_operation_view',
                    module:'',
                    display:1,
                    url:'ccc'
                },
                {
                    oid:9000,
                    pid:900,
                    type:'4',
                    name:'role_operation_add',
                    module:'',
                    display:1,
                    url:'aaa'
                },
                {
                    oid:9001,
                    pid:900,
                    type:'4',
                    name:'role_operation_modify',
                    module:'',
                    display:1,
                    url:'bbb'
                },
                {
                    oid:9002,
                    pid:900,
                    type:'4',
                    name:'role_operation_delete',
                    module:'',
                    display:1,
                    url:'ccc'
                },
                {
                    oid:9003,
                    pid:900,
                    type:'4',
                    name:'role_operation_view',
                    module:'',
                    display:1,
                    url:'ccc'
                },
                {
                    oid:9010,
                    pid:901,
                    type:'4',
                    name:'menu_operation_add',
                    module:'',
                    display:1,
                    url:'aaa'
                },
                {
                    oid:9011,
                    pid:901,
                    type:'4',
                    name:'menu_operation_update',
                    module:'',
                    display:1,
                    url:'bbb'
                },
                {
                    oid:9012,
                    pid:901,
                    type:'4',
                    name:'menu_operation_delete',
                    module:'',
                    display:1,
                    url:'ccc'
                },
                {
                    oid:9013,
                    pid:901,
                    type:'4',
                    name:'menu_operation_edit',
                    module:'',
                    display:1,
                    url:'ddd'
                },
                {
                    oid:9014,
                    pid:901,
                    type:'4',
                    name:'menu_operation_view',
                    module:'',
                    display:1,
                    url:'ccc'
                },
                {
                    oid:9020,
                    pid:902,
                    type:'4',
                    name:'user_operation_add',
                    module:'',
                    display:1,
                    url:'aaa'
                },
                {
                    oid:9021,
                    pid:902,
                    type:'4',
                    name:'user_operation_modify',
                    module:'',
                    display:1,
                    url:'bbb'
                },
                {
                    oid:9022,
                    pid:902,
                    type:'4',
                    name:'user_operation_delete',
                    module:'',
                    display:1,
                    url:'ccc'
                },
                {
                    oid:9023,
                    pid:902,
                    type:'4',
                    name:'user_operation_addStaff', 
                    module:'',
                    display:1,
                    url:'ddd'
                },
                {
                    oid:9024,
                    pid:902,
                    type:'4',
                    name:'user_operation_addOrg', 
                    module:'',
                    display:1,
                    url:'ddd'
                },
                {
                    oid:9025,
                    pid:902,
                    type:'4',
                    name:'user_operation_reset', 
                    module:'',
                    display:1,
                    url:'ddd'
                },
                {
                    oid:9026,
                    pid:902,
                    type:'4',
                    name:'user_operation_leave',
                    module:'',
                    display:1,
                    url:'ddd'
                },
                {
                    oid:9027,
                    pid:902,
                    type:'4',
                    name:'user_operation_view',
                    module:'',
                    display:1,
                    url:'ccc'
                },
            ]
        }
    },
    {
        desc: '更新指定角色的菜单权限',
        type: 'POST',
        url: '/role/auth-update',
        params: {
            id: '角色ID',
            data: '权限JSON串：[{menuId:6},{menuId:9, functions:["CREATE","UPDATE"]}]' // 注意有些菜单是没有functions字段的，如目录
        },
        result: {
            'code': '0',
            'data': {}
        }
    },
    {
        desc: '添加角色',
        type: 'POST',
        url: '/role/create',
        params: {
            name: '角色名称',
            desc: '描述'
        },
        result: {
            'code': '0',
            'data': {}
        }
    },
    {
        desc: '更新角色',
        type: 'POST',
        url: '/role/update',
        params: {
            id: '角色ID',
            name: '角色名称',
            desc: '描述'
        },
        result: {
            'code': '0',
            'data': {}
        }
    },
    {
        desc: '删除角色',
        type: 'POST',
        url: '/role/delete',
        params: {
            id: '菜单ID'
        },
        result: {
            'code': '0',
            'data': {}
        }
    }
];
