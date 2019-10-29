<template>
<div class="tags" v-if="isShowTags">
    <ul>
        <li v-for="(item, index) in tagsList" :key="index" :class="['tags_li', {'active': isActive(item.path)}]">
             <router-link :to="item.path" class="tags-li-title">
               {{item.title}}
            </router-link>
            <span class="tags_li_icon" @click="closeTags(index)"><i class="el-icon-close"></i></span>
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
import bus from '../../bus/bus'
export default {
    name: 'Tags',
    data() {
        return {
            tagsList: [],
            tagsSingle:['/informations'],
        }
    },
    //组件
    components: {
    },
    props: {
    },
    watch: {
        $route(newValue, oldValue){
            this.setTags(newValue);
        }
    },
    computed: { 
        isShowTags(){
            return this.tagsList.length > 0;
        }
    },
    created() {
        this.setTags(this.$route);
        // 监听关闭当前页面的标签页
        bus.$on('close_current_tags', () => {
            for (let i = 0, len = this.tagsList.length; i < len; i++) {
                const item = this.tagsList[i];
                if(item.path === this.$route.fullPath){
                    if(i < len - 1){
                        this.$router.push(this.tagsList[i+1].path);
                    }else if(i > 0){
                        this.$router.push(this.tagsList[i-1].path);
                    }else{
                        this.$router.push('/');
                    }
                    this.tagsList.splice(i, 1);
                    break;
                }
            }
        })
    },
    mounted() {
    },
    methods: {
        /**标签页活动时的样式控制 */
        isActive(path){
            // fullPath匹配路由，path匹配路径。
            if(this.tagsSingle.includes(path.split('?')[0])){
                return path.split('?')[0] === this.$route.fullPath.split('?')[0];
            }else{
                return path === this.$route.fullPath;
            }
            //  return path === this.$route.fullPath;
            
        },
        setTags(route){
            const  isExist = this.tagsList.some((item) => {
                return item.path == route.fullPath;
            });
            if(!isExist){
                // console.log('11111');
                let pathB = route.fullPath.split('?')[0];
                // console.log(pathB);
                this.tagsList.push(
                    {
                        name: route.name,
                        title: route.meta.title,
                        path: route.fullPath
                    }
                );
            }
        },
        /**
         * 关闭标签页
         * @param idnex
         */
        closeTags(index) {
            const delItem = this.tagsList.splice(index, 1)[0];
            const item = this.tagsList[index] ? this.tagsList[index] : this.tagsList[index-1];
            if(item){
                delItem.path === this.$router.fullPath && this.$router.push(item.path);
            }else{
                this.$router.push('/');
            }
        },
    },
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
    @import '../../sass/base/tags.scss'
</style>
