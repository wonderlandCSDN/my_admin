<template>
<div class="tags" v-if="isShowTags">
    <ul>
        <li v-for="(item, index) in Array.from(tagsList)" :key="index" :class="['tags-li', {'active': isActive(item)}]">
             <router-link :to="item.path" class="tags-li-title">
               {{item.title}}
            </router-link>
            <span class="tags-li-icon" @click="closeTags(item)"><i class="el-icon-close"></i></span>
        </li>
    </ul>
     <div class="tags-close-box">
        <el-dropdown @command="handleTags">
            <el-button size="mini" type="primary">
                标签选项<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown" size="small">
                <el-dropdown-item command="other">关闭其他</el-dropdown-item>
                <el-dropdown-item command="all">关闭所有</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
     </div>
</div>
</template>

<script>
import bus from '../../bus/bus'
import {mapState, mapActions} from 'vuex'
export default {
    name: 'Tags',
    data() {
        return {}
    },
    //组件
    components: {
    },
    props: {
    },
    computed: { 
        ...mapState('tags', ['tagsList']),
        isShowTags(){
            return this.tagsList.length > 0;
        }
    },
    watch: {
        $route() {
            this.setTags();
        }
    },
    created() {
        this.setTags();
    },
    mounted() {},
    methods: {
        ...mapActions('tags', ['addTags','deleteTags','delOtherTags','delAllTags']),

        /**
         * 标签页活动时的样式控制
         * @param route
         *  */
        isActive(route){
            // fullPath匹配路由，path匹配路径。
            return route.path.split('?')[0] === this.$route.fullPath.split('?')[0];
        },

        /**添加标签页 */
        setTags() { 
            this.addTags(this.$route);
        },
        /**
         * 关闭当前标签页
         * @param route
         */
        closeTags(route) {//先提交删除数据的方法,数组删除出掉数据后，如果关闭的是当前打开的路由需要将路由改为数组最后一次push进去的路由
            this.deleteTags(route).then((res)=>{
                if(this.isActive(route)){
                    const lastTag = res[res.length-1];
                    if(lastTag){
                        this.$router.push(lastTag);
                    }else{
                        this.$router.push('/');
                    }
                }
            })
        },

        handleTags(command){
            command == 'other' ? this.closeOtherTags() : this.closeAllTags();
        },

        /**关闭其他标签页 */
        closeOtherTags(){
            this.delOtherTags(this.$route);
        },

        /**关闭所有标签页 */
        closeAllTags(){
            this.delAllTags();
            this.$router.push('/');
        }
    },
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
    @import '../../sass/base/tags.scss'
</style>
