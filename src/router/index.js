import Vue from 'vue'
import Router from 'vue-router'
import Login from '../view/login/Login.vue'
import Register from '../view/register/Register.vue'
import Home from '../components/common/Home.vue'
import Informations from '../view/project/informations.vue'

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
                }
            ]
        }
    ]
})
