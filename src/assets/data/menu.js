const menu = [
    {
        name: '导航一',
        id: '1',
        icon: 'icon-fangdichanjianzhu',
        code: '1',
        children: [
            {
                name: '测试页面',
                id: '1-1',
                icon: '',
                code: 'test',
                children: []
            },
            {
                name: '选项2',
                id: '1-2',
                icon: '',
                code: '1-2',
                children: [
                    {
                        name: '项目信息',
                        id: '1-2-1',
                        icon: '',
                        code: 'informations',
                        children: []
                    },
                    {
                        name: '项目列表',
                        id: '1-2-2',
                        icon: '',
                        code: 'taskList',
                        children: []
                    }
                ]
            }
        ]
    },
    {
        name: 'ThreeJs3D',
        id: '2',
        icon: 'icon-guanligudong',
        code: '2',
        children:[
            {
                name: '线立方体',
                id: '2-1',
                icon: '',
                code: 'cube',
                children: []
            },
            {
                name: '室内场景',
                id: '2-2',
                icon: '',
                code: 'indoorScene',
                children: []
            }
        ]
    },
    {
        name: 'WebGL使用',
        id: '3',
        icon: 'icon-ciricaipintoupiao',
        code: '3'
    },
    {
        name: '系统设置',
        id: '4',
        icon: 'icon-xitong-gongnengpeizhi',
        code: '4'
    }
];

export default menu;