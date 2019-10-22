import Vue from 'vue'
import Router from 'vue-router'
import Login from '../view/login/Login.vue'
import Register from '../view/register/Register.vue'
import Home from '../components/common/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'login',
            component: Login,
            meta: {title: ''}
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
                meta: {title: '',keepAlive: false}
                }
            ]
        }
    ]
})
