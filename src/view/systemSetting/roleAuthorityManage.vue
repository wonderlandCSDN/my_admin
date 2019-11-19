<template>
    <div class="roleAuthorityManageBox">
        <el-row :gutter="8">
            <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
                <el-card shadow="nerver">
                    <div class="leftBox">
                        <el-button-group class="groupBtnsBox">
                            <el-button type="primary" icon="el-icon-plus" class="itemBtn" plain>新增</el-button>
                            <el-button type="primary" icon="el-icon-edit" class="itemBtn" plain>修改</el-button>
                            <el-button type="primary" icon="el-icon-delete" class="itemBtn" plain>删除</el-button>
                        </el-button-group>
                        <el-button type="primary" icon="el-icon-user" class="authBtn">权限分配</el-button>
                    </div>
                </el-card>
            </el-col>
            <el-col :xs="19" :sm="19" :md="19" :lg="19" :xl="19">
                <el-card shadow="nerver">
                    
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'roleAuthorityManage',
    data() {
        return {}
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
    @import '../../sass/page/roleAuthorityManage.scss'
</style>
