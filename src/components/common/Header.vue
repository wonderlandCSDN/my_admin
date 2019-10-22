<template>
<div class="header_box">
    <div class="left_box">
        <i class="iconfont icon-caidanfenlei menu_icon" @click="collapseChange"></i>
        <span>logo图标</span>
    </div>
    <div class="right_box" align="right">
        {{name}}
    </div>
</div>
</template>

<script>

import Bus from '../../bus/bus.js'

export default {
    name: 'Header',
    data() {
        return {
            name: 'header 个人信息 | 登录名 ',
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
    },
    created() {
    },
    mounted() {
    },
    methods: { 
        collapseChange(){
            const _that = this;
            _that.isCollapse = !_that.isCollapse;
            Bus.$emit('collapse', _that.isCollapse);
        }
    },
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
    @import '../../sass/base/header.scss'
</style>

