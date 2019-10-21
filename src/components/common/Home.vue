<template>
    <div class="home_box">
        <v-header></v-header>
        <v-sidebar></v-sidebar>
        <div class="content_box"></div>
    </div>
</template>

<script>
import vHeader from './Header'
import vSidebar from './Sidebar'
export default {
    name: 'home',
    data() {
        return {}
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
    },
    mounted() {
    },
    methods: { 
    },
}
</script>
