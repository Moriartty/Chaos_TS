module.exports = [
    {
        desc: '获取用户指定系统的菜单数据,用于渲染系统菜单目录',
        type: 'GET',
        url: '/menu/user',
        params: {
            userId:'',
            systemId:''
        },//从cookie里面获取
        result: {
            'code': '0',
            'data': [
                { oid: 1, name: 'menuName_home', module: 'home',pid:-1,type:'3' },
                { oid: 2, name: 'menuName_profile', module: 'profile',pid:-1,type:'3' },
                {
                    oid: 8,
                    name: 'menuName_track',
                    module:'',
                    pid:0,
                    type:'2',
                    list: [
                        { 
                            oid: 800, 
                            name: 'menuName_track_trackInfo', 
                            module: 'track/trackInfo',
                            pid:8,
                            type:'3', 
                        },
                        { 
                            oid: 801, 
                            name: 'menuName_track_trackType', 
                            module: 'track/trackType',
                            pid:8,
                            type:'3', 
                        },
                        { 
                            oid: 802, 
                            name: 'menuName_track_trackDemand', 
                            module: 'track/trackDemand',
                            pid:8,
                            type:'3', 
                        },
                    ]
                },
                {
                    oid: 9,
                    name: 'menuName_systemConfig',
                    module:'',
                    pid:0,
                    type:'2',
                    list: [
                        { 
                            oid: 900, 
                            name: 'menuName_systemConfig_role', 
                            module: 'systemConfig/role',
                            pid:9,
                            type:'3', 
                        },
                        { 
                            oid: 901, 
                            name: 'menuName_systemConfig_menu', 
                            module: 'systemConfig/menu',
                            pid:9,
                            type:'3', 
                        },
                        { 
                            oid: 902, 
                            name: 'menuName_systemConfig_user', 
                            module: 'systemConfig/user',
                            pid:9,
                            type:'3', 
                        },
                        { 
                            oid: 903, 
                            name: 'menuName_systemConfig_fieldTranslation', 
                            module: 'systemConfig/fieldTranslation',
                            pid:9,
                            type:'3', 
                        },
                    ]
                }
            ]
        }
    },
    {
        desc: '获取常用模块列表',
        type: 'GET',
        url: '/home/entry',
        params: {},
        result: {
            'code': '0',
            'data': [
                'systemConfig/role', 'systemConfig/menu', 'systemConfig/user'
            ]
        }
    },
    {
        desc: '获取所有菜单数据,渲染初始的权限树',
        type: 'GET',
        url: '/menu',
        params: '无',
        result: {
            'code': '0',
            'data': [
                {
                    oid:-1,
                    pid:0,
                    type:'1',
                    name:"systemName_teye",
                    module:'',
                    display:1,
                    list:[
                        { 
                            oid: 1,
                            pid:-1,
                            type:'3', 
                            name: 'menuName_home', 
                            module: 'home', 
                            display: 1 ,
                            list:[
                                {
                                    oid:1000,
                                    pid:1,
                                    type:'4',
                                    name:'home_operation_view',
                                    module:'',
                                    display:1,
                                    url:'ccc'
                                },
                            ]
                        },
                        { 
                            oid: 2,
                            pid:-1,
                            type:'3', 
                            name: 'menuName_profile', 
                            module: 'profile', 
                            display: 1 ,
                            list:[
                                {
                                    oid:2000,
                                    pid:1,
                                    type:'4',
                                    name:'profile_operation_view',
                                    module:'',
                                    display:1,
                                    url:'ccc'
                                },
                            ]
                        },
                        {
                            oid: 8,
                            name: 'menuName_track',
                            module:'',
                            pid:0,
                            type:'2',
                            list: [
                                { 
                                    oid: 800, 
                                    name: 'menuName_track_trackInfo', 
                                    module: 'track/trackInfo',
                                    pid:8,
                                    type:'3', 
                                    list:[
                                        {
                                            oid:8000,
                                            pid:800,
                                            type:'4',
                                            name:'trackInfo_operation_add',
                                            module:'',
                                            display:1,
                                            url:'aaa'
                                        },
                                        {
                                            oid:8001,
                                            pid:800,
                                            type:'4',
                                            name:'trackInfo_operation_modify',
                                            module:'',
                                            display:1,
                                            url:'bbb'
                                        },
                                        {
                                            oid:8002,
                                            pid:800,
                                            type:'4',
                                            name:'trackInfo_operation_delete',
                                            module:'',
                                            display:1,
                                            url:'ccc'
                                        },
                                        {
                                            oid:8003,
                                            pid:800,
                                            type:'4',
                                            name:'trackInfo_operation_view',
                                            module:'',
                                            display:1,
                                            url:'ccc'
                                        },
                                    ]
                                },
                                { 
                                    oid: 801, 
                                    name: 'menuName_track_trackType', 
                                    module: 'track/trackType',
                                    pid:8,
                                    type:'3', 
                                    list:[
                                        {
                                            oid:8010,
                                            pid:801,
                                            type:'4',
                                            name:'trackType_operation_add',
                                            module:'',
                                            display:1,
                                            url:'aaa'
                                        },
                                        {
                                            oid:8011,
                                            pid:801,
                                            type:'4',
                                            name:'trackType_operation_modify',
                                            module:'',
                                            display:1,
                                            url:'bbb'
                                        },
                                        {
                                            oid:8012,
                                            pid:801,
                                            type:'4',
                                            name:'trackType_operation_delete',
                                            module:'',
                                            display:1,
                                            url:'ccc'
                                        },
                                        {
                                            oid:8013,
                                            pid:801,
                                            type:'4',
                                            name:'trackType_operation_view',
                                            module:'',
                                            display:1,
                                            url:'ccc'
                                        },
                                    ]
                                },
                                { 
                                    oid: 802, 
                                    name: 'menuName_track_trackDemand', 
                                    module: 'track/trackDemand',
                                    pid:8,
                                    type:'3',
                                    list:[
                                        {
                                            oid:8020,
                                            pid:802,
                                            type:'4',
                                            name:'trackDemand_operation_add',
                                            module:'',
                                            display:1,
                                            url:'aaa'
                                        },
                                        {
                                            oid:8021,
                                            pid:802,
                                            type:'4',
                                            name:'trackDemand_operation_modify',
                                            module:'',
                                            display:1,
                                            url:'bbb'
                                        },
                                        {
                                            oid:8022,
                                            pid:802,
                                            type:'4',
                                            name:'trackDemand_operation_delete',
                                            module:'',
                                            display:1,
                                            url:'ccc'
                                        },
                                        {
                                            oid:8023,
                                            pid:802,
                                            type:'4',
                                            name:'trackDemand_operation_view',
                                            module:'',
                                            display:1,
                                            url:'ccc'
                                        },
                                        {
                                            oid:8024,
                                            pid:802,
                                            type:'4',
                                            name:'trackDemand_operation_verify',
                                            module:'',
                                            display:1,
                                            url:'ccc'
                                        },
                                        {
                                            oid:8025,
                                            pid:802,
                                            type:'4',
                                            name:'trackDemand_operation_addInfo',
                                            module:'',
                                            display:1,
                                            url:'ccc'
                                        },
                                    ] 
                                },
                            ]
                        },
                        {
                            oid: 9,
                            pid:-1,
                            type:'2',
                            name: 'menuName_systemConfig',
                            module:'',
                            list: [
                                { 
                                    oid: 900, 
                                    pid:9,
                                    type:'3',
                                    name: 'menuName_systemConfig_role', 
                                    module: 'systemConfig/role', 
                                    display: 3 ,
                                    list:[
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
                                    ]
                                },
                                { 
                                    oid: 901, 
                                    pid:9,
                                    type:'3',
                                    name: 'menuName_systemConfig_menu', 
                                    module: 'systemConfig/menu', 
                                    display: 2 ,
                                    list:[
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
                                    ]
                                },
                                { 
                                    oid: 902, 
                                    pid:9,
                                    type:'3',
                                    name: 'menuName_systemConfig_user', 
                                    module: 'systemConfig/user', 
                                    display: 1,
                                    list:[
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
                                },
                                { 
                                    oid: 903, 
                                    pid:9,
                                    type:'3',
                                    name: 'menuName_systemConfig_fieldTranslation', 
                                    module: 'systemConfig/fieldTranslation', 
                                    display: 1,
                                    list:[
                                        {
                                            oid:9030,
                                            pid:903,
                                            type:'4',
                                            name:'fieldTranslation_operation_view',
                                            module:'',
                                            display:1,
                                            url:'ccc'
                                        },
                                        {
                                            oid:9031,
                                            pid:903,
                                            type:'4',
                                            name:'fieldTranslation_operation_add',
                                            module:'',
                                            display:1,
                                            url:'ccc'
                                        },
                                        {
                                            oid:9032,
                                            pid:903,
                                            type:'4',
                                            name:'fieldTranslation_operation_modify',
                                            module:'',
                                            display:1,
                                            url:'ccc'
                                        },
                                        {
                                            oid:9033,
                                            pid:903,
                                            type:'4',
                                            name:'fieldTranslation_operation_delete',
                                            module:'',
                                            display:1,
                                            url:'ccc'
                                        },
                                    ] 
                                },
                            ],
                            display: 1
                        }
                    ]
                }
            ]
        }
    },
    {
        desc:'获取系统列表',
        type:'GET',
        url:'/menu/systems',
        params:{
            userId:''
        },
        result:{
            code:'0',
            data:[
                {oid:1,name:'systemName_teye',module:'',pid:0},
                {oid:2,name:'systemName_fortest',module:'',pid:0},
                {oid:3,name:'systemName_naruto',module:'',pid:0},
            ]
        }
    },
    {
        desc: '添加菜单',
        type: 'POST',
        url: '/menu/create',
        params: {
            parentId: '父级目录菜单ID',
            name: '菜单名称',
            module: '菜单模块名',
            display: '是否显示。1显示，0隐藏'
        },
        result: {
            'code': '0',
            'data': {}
        }
    },
    {
        desc: '更新菜单',
        type: 'POST',
        url: '/menu/update',
        params: {
            id: '菜单ID',
            parentId: '父级目录菜单ID',
            name: '菜单名称',
            module: '菜单模块名',
            display: '是否显示。1显示，0隐藏'
        },
        result: {
            'code': '0',
            'data': {}
        }
    },
    {
        desc: '删除菜单',
        type: 'POST',
        url: '/menu/delete',
        params: {
            id: '菜单ID'
        },
        result: {
            'code': '0',
            'data': {}
        }
    },
    {
        desc: '菜单排序－上移',
        type: 'POST',
        url: '/menu/up',
        params: {
            id: '菜单ID'
        },
        result: {
            'code': '0',
            'data': {}
        }
    },
    {
        desc: '菜单排序－下移',
        type: 'POST',
        url: '/menu/down',
        params: {
            id: '菜单ID'
        },
        result: {
            'code': '0',
            'data': {}
        }
    }
];
