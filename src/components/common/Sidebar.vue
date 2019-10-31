<template>
<div class="sidebar_box">
    <el-menu v-loading="listLoading" :collapse="isCollapse" :default-active="onRoutes" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router>
        <template v-for="item in menu">
            <template v-if="item.children">
                <el-submenu :index="item.code" :key="item.code">
                    <template slot="title">
                        <i :class="['iconfont',item.icon]"></i>
                        <span slot="title">{{item.name}}</span>
                    </template>
                    <template v-for="subItem in item.children">
                        <el-submenu v-if="subItem.children && subItem.children.length > 0" :index="subItem.code" :key="subItem.code">
                            <template slot="title">
                                <i :class="['iconfont',subItem.icon]"></i>
                                <span slot="title">{{subItem.name}}</span>
                            </template>
                            <el-menu-item v-for="threeItem in subItem.children" :index="threeItem.code" :key="threeItem.code">
                                <i :class="['iconfont',threeItem.icon]"></i>
                                <span slot="title">{{threeItem.name}}</span>
                            </el-menu-item>
                        </el-submenu>
                        <el-menu-item v-else :index="subItem.code" :key="subItem.code">
                            <i :class="['iconfont',subItem.icon]"></i>
                            <span slot="title">{{subItem.name}}</span>
                        </el-menu-item>
                    </template>
                </el-submenu>
            </template>
            <template v-else>
                <el-menu-item  :index="item.code" :key="item.code">
                    <i :class="['iconfont',item.icon]"></i>
                    <span slot="title">{{item.name}}</span>
                </el-menu-item>
            </template>
        </template>
    </el-menu>
</div>
</template>

<script>

import Menu from '../../assets/data/menu'
import Bus from '../../bus/bus.js'

export default {
    name: 'Sidebar',
    data() {
        return {
            menu: [],
            listLoading: false,
            isCollapse: false,
        }
    },
    //组件
    components: {
    },
    props: {
    },
    watch: {
    },
    computed: { 
        onRoutes(){
            return this.$route.path.replace('/',''); 
        }
    },
    created() {
        const _that = this;
        Bus.$on('collapse',(msg)=>{
            _that.isCollapse = msg;
        });
    },
    mounted() {
        this.init();
    },
    methods: { 
        init () {
            this.menu = Menu;
        }
    },
}
</script>

<style lang="css" rel="stylesheet">
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 240px;
    }
</style>

<style lang='scss' rel='stylesheet/scss' scoped>
    @import '../../sass/base/sidebar.scss'
</style>
