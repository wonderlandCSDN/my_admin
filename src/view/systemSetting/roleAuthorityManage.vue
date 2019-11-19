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
                        <el-button type="primary" icon="el-icon-user" class="authBtn" @click="handleAuthority">权限分配</el-button>
                    </div>
                </el-card>
            </el-col>
            <el-col :xs="19" :sm="19" :md="19" :lg="19" :xl="19">
                <el-card shadow="nerver">
                    
                </el-card>
            </el-col>
        </el-row>
        <el-dialog title="权限分配" :visible="dialogVisible" width="60%" @close="dialogVisible = false">
            <authority></authority>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import Authority from '../../components/page/authority'
export default {
    name: 'roleAuthorityManage',
    data() {
        return {
            dialogVisible: false,
        }
    },
    //组件
    components: {
        authority: Authority
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
        handleAuthority(){
            this.dialogVisible = true;
        }
    },
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
    @import '../../sass/page/roleAuthorityManage.scss'
</style>
