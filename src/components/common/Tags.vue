<template>
<div class="tags">
    <ul>
        <li v-for="(item, index) in tagsList" :key="index" :class="['tags_li', {'active': isActive(item.path)}]">
             <router-link :to="item.path" class="tags-li-title">
               {{item.title}}
            </router-link>
            <span class="tags-li-icon" @click="closeTags(index)"><i class="el-icon-close"></i></span>
        </li>
    </ul>
     <div class="tags_close_box">
        <el-dropdown>
            <el-button size="mini" type="primary">
                标签选项<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown" size="small">
                <el-dropdown-item>关闭其他</el-dropdown-item>
                <el-dropdown-item>关闭所有</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
     </div>
</div>
</template>

<script>
export default {
    name: 'Tags',
    data() {
        return {
            tagsList: [
            { name: '测试', title: '标签一', path: '/test' },
            { name: '项目信息', title: '标签二', path: '/informations' },
            { name: 'test1', title: '标签三', path: '/test1'  },
            { name: 'test2', title: '标签四', path: '/test2'  },
            { name: 'test3', title: '标签五', path: '/test3'  }
            ],
            tagsSingle:['/informations']
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
        /** */
        isActive(path){

            // fullPath匹配路由，path匹配路径。
            if(this.tagsSingle.includes(path.split('?')[0])){
                return path.split('?')[0] === this.$route.fullPath.split('?')[0];
            }else{
                return path === this.$route.fullPath;
            }
            
        },
        /**
         * 关闭标签页
         * @param idnex
         */
        closeTags(index) {
            let delItem = this.tagsList.splice(index, 1)[0];
            // console.log(delItem);
            // console.log(this.$route);
        },
    },
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
    @import '../../sass/base/tags.scss'
</style>
