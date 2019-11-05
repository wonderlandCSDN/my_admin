
import Menu from '../../../assets/data/menu';
import {setToken, getToken} from '../../../utils/auth'

const user = {
    namespaced: true,

    state: {
        userOBJ: {},
        token: ''
    },

    getters: {
        
    },

    mutations: {
        /**更新用户初始化信息 */
        SET_USEROBJ: (state, data) => {
            state.userOBJ = data;
        },

        /**更新token */
        SET_TOKEN: (state, token) => {
            state.token = token;
            setToken(token);
        }

    },

    actions: {
        /**登录 */
        Login({commit}, userInfo){
            return new Promise((resolve, reject) => {
                //接口  --参数（userInfo
                setTimeout(()=>{
                    const res = {
                        data: Menu,
                        token: 'token_test',
                        status: 200,
                        messege: '登录成功！'
                    }
                    // const errorObj = {
                    //     status: 500,
                    //     messege: '登录失败！'
                    // }
                    commit('SET_USEROBJ', res.data);
                    commit('SET_TOKEN', res.token);
                    resolve(res);
                    /* this.$API.test.test().then((res)=>{
                        resolve(res);
                    }).catch((error)=>{
                        reject(error);
                    }); */

                },500);
            });
        }
    }
}

export default user;