const user = {
    namespaced: true,

    state: {
        userInfo: {},
        token: ''
    },

    getters: {
        
    },

    mutations: {
        /**更新用户初始化信息 */
        SET_USERINFO: (state, data) => {
            state.userInfo = data;
        },

        /**更新token */
        SET_TOKEN: (state, token) => {
            state.token = token;
        }

    },

    actions: {
        /**登录 */
        Login({commit}, userInfo){
            return new Promise((resolve, reject) => {
                //接口
            });
        }
    }
}

export default user;