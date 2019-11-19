<template>
<div class="taskListBox">
    <el-row :gutter="8">
        <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
            <el-card shadow="hover">
                <div class="treeBox">
                    <el-button-group class="groupBtnsBox">
                        <el-button type="primary" icon="el-icon-plus" class="itemBtn">新增</el-button>
                        <el-button type="primary" icon="el-icon-edit" class="itemBtn">修改</el-button>
                        <el-button type="primary" icon="el-icon-delete" class="itemBtn">删除</el-button>
                    </el-button-group>
                    <el-input placeholder="输入关键字进行过滤" v-model="filterText" clearable></el-input>
                    <el-tree
                        class="filter-tree treeCon hx-scroll"
                        :data="treeData"
                        :props="defaultProps"
                        default-expand-all
                        :filter-node-method="filterNode"
                        ref="tree">
                        <span slot-scope="{node, data}" class="custom-tree-node">
                            <span>
                                <i v-if="node.expanded" class="el-icon-folder-opened"></i>
                                <i v-else class="el-icon-folder"></i>
                                {{node.label}}
                            </span>
                        </span>
                    </el-tree>
                </div>
            </el-card>
        </el-col>
        <el-col :xs="19" :sm="19" :md="19" :lg="19" :xl="19">
            <el-card shadow="hover">
                
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
            treeData: [
                {
                    id: '1',
                    label: '一级 1',
                    children: [
                        {
                            id: '1-1',
                            label: '二级 1-1',
                            children: [
                                {
                                    id: '1-1-1',
                                    label: '三级 1-1-1'
                                }, 
                                {
                                    id: '1-1-2',
                                    label: '三级 1-1-2'
                                }
                            ]
                        }
                    ]
                }, 
                {
                    id: '2',
                    label: '一级 2',
                    children: [
                        {
                            id: '2-1',
                            label: '二级 2-1'
                        },
                        {
                            id: '2-2',
                            label: '二级 2-2'
                        }
                    ]
                }, 
                {
                    id: '3',
                    label: '一级 3',
                    children: [
                        {
                            id: '3-1',
                            label: '二级 3-1'
                        },
                        {
                            id: '3-2',
                            label: '二级 3-2'
                        }
                    ]
                },
                {
                    id: '4',
                    label: '一级 4',
                    children: [
                        {
                            id: '4-1',
                            label: '二级 4-1'
                        },
                        {
                            id: '4-2',
                            label: '二级 4-2'
                        }
                    ]
                },
                {
                    id: '5',
                    label: '一级 5',
                    children: [
                        {
                            id: '5-1',
                            label: '二级 5-1'
                        },
                        {
                            id: '5-2',
                            label: '二级 5-2'
                        }
                    ]
                },
                {
                    id: '6',
                    label: '一级 6',
                    children: [
                        {
                            id: '6-1',
                            label: '二级 6-1'
                        },
                        {
                            id: '6-2',
                            label: '二级 6-2'
                        }
                    ]
                },
                {
                    id: '7',
                    label: '一级 7',
                    children: [
                        {
                            id: '7-1',
                            label: '二级 7-1'
                        },
                        {
                            id: '7-2',
                            label: '二级 7-2'
                        }
                    ]
                },
                {
                    id: '8',
                    label: '一级 8',
                    children: [
                        {
                            id: '8-1',
                            label: '二级 8-1'
                        },
                        {
                            id: '8-2',
                            label: '二级 8-2'
                        }
                    ]
                },
                {
                    id: '9',
                    label: '一级 9',
                    children: [
                        {
                            id: '9-1',
                            label: '二级 9-1'
                        },
                        {
                            id: '9-2',
                            label: '二级 9-2'
                        }
                    ]
                },
                {
                    id: '10',
                    label: '一级 10',
                    children: [
                        {
                            id: '10-1',
                            label: '二级 10-1'
                        },
                        {
                            id: '10-2',
                            label: '二级 10-2'
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
