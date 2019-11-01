<template>
    <div class="home_box">
        <v-header></v-header>
        <v-sidebar></v-sidebar>
        <div :class="['content_box',{'content_collapse':isCollapse}]">
            <v-tags></v-tags>
            <!-- 非IE使用动画 -->
            <div v-if="!isIE"  class="content hx-scroll">
                <transition name="move" mode="out-in">
                    <keep-alive>
                        <router-view v-if="$route.meta.keepAlive"></router-view>
                    </keep-alive>
                </transition>
                <transition name="move" mode="out-in">
                    <router-view v-if="!$route.meta.keepAlive"></router-view>
                </transition>
            </div>
            
            <!--IE不使用动画-->
            <div v-else class="content hx-scroll">
                <keep-alive>
                    <router-view v-if="$route.meta.keepAlive"></router-view>
                </keep-alive>
                <router-view v-if="!$route.meta.keepAlive"></router-view>
            </div>
            <!-- 设置按钮 -->
            <div  :class="['settingBox',{'active': !drawer, 'close':drawer}]" @click="handleSetting">
                <i v-if="!drawer" class="el-icon-s-tools settingIcon"></i>
                <i v-else class="el-icon-close settingIcon"></i>
            </div>
            <div>
                <el-drawer 
                    ref="drawerSetting" 
                    title="我是标题"
                    :modal="false" 
                    :visible.sync="drawer" 
                    :direction="direction" 
                    :before-close="beforeCloseFn"  
                    size="350px"
                    :show-close="false">
                    <span>我来啦!</span>
                </el-drawer>
            </div>
        </div>
    </div>
</template>

<script>
import vHeader from './Header'
import vSidebar from './Sidebar'
import vTags from './Tags'
import Bus from '../../bus/bus.js'
export default {
    name: 'Home',
    data() {
        return {
            isCollapse: false,
            isIE: false,
            drawer: false,
            direction: 'rtl',
        }
    },
    //组件
    components: {vHeader,vSidebar,vTags},
    props: {
    },
    watch: {
    },
    computed: { 
    },
    created() {
        const _that = this;
        Bus.$on('collapse',(msg)=>{
            _that.isCollapse = msg;
        });
    },
    mounted() {
        this.isIE = this.$utils.isIE();
    },
    methods: { 
        handleSetting(){
            if(!this.drawer){
                this.drawer = true;
            }else{
                console.log(this.$refs['drawerSetting']);
                this.$refs.drawerSetting.closeDrawer();
            }
        },

        beforeCloseFn(done) {
            done();
        // this.$confirm('确认关闭？')
        //   .then(_ => {
        //     done();
        //   })
        //   .catch(_ => {});
      }
    },
}
</script>
