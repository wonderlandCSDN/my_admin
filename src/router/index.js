import Vue from 'vue'
import Router from 'vue-router'
import Login from '../view/login/Login.vue'
import Register from '../view/register/Register.vue'
import Home from '../components/common/Home.vue'
import Informations from '../view/project/informations.vue'
import TaskList from '../view/project/taskList.vue'
import Cube from '../view/ThreeJS_3D/cube.vue'
import IndoorScene from '../view/ThreeJS_3D/indoorScene.vue'
import RoleAuthorityManage from '../view/systemSetting/roleAuthorityManage.vue'

Vue.use(Router)

export default new Router({
    routes: [
        // 重定向
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {title: ''}
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
            meta: {title: ''}
        },
        // 重定向
        { 
            path: '/home', 
            redirect: '/informations'
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta: {title: '', keepAlive: false},
            children: [
                {
                    path: '/test',
                    name: 'test',
                    component: Register,
                    meta: {title: '测试页面',keepAlive: false}
                },
                {
                    path: '/informations',
                    name: 'informations',
                    component: Informations,
                    meta: {title: '项目信息',keepAlive: false}
                },
                {
                    path: '/taskList',
                    name: 'taskList',
                    component: TaskList,
                    meta: {title: '项目列表',keepAlive: false}
                },
                {
                    path: '/cube',
                    name: 'cube',
                    component: Cube,
                    meta: {title: '立方体',keepAlive: false}
                },
                {
                    path: '/indoorScene',
                    name: 'indoorScene',
                    component: IndoorScene,
                    meta: {title: '室内场景',keepAlive: false}
                },
                {
                    path: '/roleAuthorityManage',
                    name: 'roleAuthorityManage',
                    component: RoleAuthorityManage,
                    meta: {title: '角色权限',keepAlive: false}
                }
            ]
        }
    ]
})
