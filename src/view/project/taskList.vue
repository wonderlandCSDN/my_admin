<template>
<div class="taskListBox">
    <el-row :gutter="8">
    <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
        <el-card shadow="hover">
            <div class="treeBox">
                <el-input placeholder="输入关键字进行过滤" v-model="filterText"></el-input>
                <el-tree
                    class="filter-tree"
                    :data="data"
                    :props="defaultProps"
                    default-expand-all
                    :filter-node-method="filterNode"
                    ref="tree">
                </el-tree>
            </div>
        </el-card>
    </el-col>
    <el-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18">
        <el-card shadow="hover">
            ddd
        </el-card>
    </el-col>
    </el-row>
</div>
</template>

<script>
export default {
    name: 'taskList',
    data() {
        return {
            filterText: '',
            data: [
                {
                    id: 1,
                    label: '一级 1',
                    children: [
                        {
                            id: 4,
                            label: '二级 1-1',
                            children: [
                                {
                                    id: 9,
                                    label: '三级 1-1-1'
                                }, 
                                {
                                    id: 10,
                                    label: '三级 1-1-2'
                                }
                            ]
                        }
                    ]
                }, 
                {
                    id: 2,
                    label: '一级 2',
                    children: [
                        {
                            id: 5,
                            label: '二级 2-1'
                        },
                        {
                            id: 6,
                            label: '二级 2-2'
                        }
                    ]
                }, 
                {
                    id: 3,
                    label: '一级 3',
                    children: [
                        {
                            id: 7,
                            label: '二级 3-1'
                        },
                        {
                            id: 8,
                            label: '二级 3-2'
                        }
                    ]
                }
            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        }
    },
    //组件
    components: {
    },
    props: {
    },
    watch: {
        filterText(val){
            this.$refs.tree.filter(val);
        }
    },
    computed: { 
    },
    created() {
    },
    mounted() {
    },
    methods: { 
        filterNode(value, data) {
            if (!value) return true;
            return data.label.indexOf(value) !== -1;
        }
    },
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
    @import '../../sass/page/taskList.scss'
</style>
