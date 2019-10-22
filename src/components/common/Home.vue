<template>
    <div class="home_box">
        <v-header></v-header>
        <v-sidebar></v-sidebar>
        <div :class="['content_box',{'content_collapse':isCollapse}]"></div>
    </div>
</template>

<script>
import vHeader from './Header'
import vSidebar from './Sidebar'
import Bus from '../../bus/bus.js'
export default {
    name: 'Home',
    data() {
        return {
            isCollapse: false,
        }
    },
    //组件
    components: {vHeader,vSidebar},
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
    },
    methods: { 
    },
}
</script>
