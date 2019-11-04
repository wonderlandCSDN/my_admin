import Cookies from 'js-cookie'

const TokenKey = 'my_admin_token'
const host_name = process.env.BASE_HOST_NAME;

export function setToken(token) {
    return Cookies.set(TokenKey, token);
}

export function getToken() {
    return Cookies.get(TokenKey);
}

export function removeToken(){
    return Cookies.remove(TokenKey);
}

/**统一登录 */
 /* export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token) {
    if (host_name == 'localhost') {
        return Cookies.set(TokenKey, token);
    } else {
        return Cookies.set(TokenKey, token, {domain: host_name, path: '/'});
    }
}

export function removeToken() {
    if (host_name == 'localhost') {
        return Cookies.remove(TokenKey);
    } else {
        return Cookies.remove(TokenKey, {domain: host_name});
    }
} */