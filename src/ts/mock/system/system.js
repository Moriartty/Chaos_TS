module.exports = [
    {
        desc: '根据用户获取可访问系统列表',
        type: 'GET',
        url: '/getAvailableSystemByUser',
        params: {
          userId:'用户id'
        },
        result: {
            'code': '0',
            'data': [
                {
                    systemName:'Teye',
                    systemUrl:'http://www.test-teye.com/big-data/index.html',
                    systemIcon:''
                },
                {
                    systemName:'ForTest',
                    systemUrl:'http://www.test-teye.com/fortest/index.html',
                    systemIcon:''
                },
                {
                    systemName:'Naruto',
                    systemUrl:'http://www.test-teye.com/naruto/index.html',
                    systemIcon:''
                }
            ]

        }
    },
]