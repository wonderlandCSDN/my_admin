const tags = {
    /**定义命名空间，防止多个模块同名共享 */
    namespaced: true,

    state: {
        tagsList: [], // 存放所有浏览过的且不重复的路由数据（路由数组）
    },

    getters: {
        tagsList: (state) => {
            return state.tagsList;
        }
    },

    mutations: {
        ADD_TAGS: (state, route)=>{ // 打开新页签——添加路由数据方法
            const isExit = state.tagsList.some((item)=>{
                return item.path.split('?')[0] === route.fullPath.split('?')[0];
            });
            if(!isExit){// 不存在路由数组中，则添加
                state.tagsList.push({
                    name: route.name,
                    path: route.fullPath,
                    title: route.meta.title || 'no-title'
                });
            }else{
                return;
            }
        },

        DEL_TAGS(state, route) {// 关闭标签——删除路由数据的方法
            if(state.tagsList.length==0){
                return;
            }
            state.tagsList.forEach((item, index)=>{
                if(item.path.split('?')[0] === route.path.split('?')[0]){
                    state.tagsList.splice(index, 1);
                    return;
                }
            });
        },

        DEL_OTHER(state, route){ // 关闭其他标签页
            state.tagsList = state.tagsList.filter((item) => {
                return item.path.split('?')[0] === route.path.split('?')[0];
            });
        },

        DEL_ALL(state){ // 关闭所有标签页
            state.tagsList = [];
        }


    },

    actions: { //触发mutations

        //触发添加方法  context对象与store实例具有相同方法和属性
        addTags(context, route){
            context.commit('ADD_TAGS', route);
        },

        //触发删除当前标签页方法
        deleteTags({commit, state}, route) { //删除路由数据之后，需要再去刷新路由，这是一个异步的过程，需要回调函数
            return new Promise((resolve)=>{ // resolve方法： 未来成功后回调的方法
                commit('DEL_TAGS', route);
                resolve([...state.tagsList]);
            });
        },

        //触发删除其他标签页
        delOtherTags({commit},route){
            commit('DEL_OTHER', route);
        },

        //触发删除所有标签页
        delAllTags({commit}){
            commit('DEL_ALL');
        }

    }
};

export default tags;