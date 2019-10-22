<template>
<div class="header_box">
    <div class="left_box">
        <i class="iconfont icon-caidanfenlei menu_icon"></i>
        <span>logo图标</span>
    </div>
    <div class="right_box" align="right">
        {{name}}
    </div>
</div>
</template>

<script>
export default {
    name: 'header',
    data() {
        return {
            name: 'header 个人信息 | 登录名 '
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
    },
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
    @import '../../sass/base/header.scss'
</style>

