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
    },
}
</script>
