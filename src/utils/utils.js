export default class utils{
    /**判断是否为IE浏览器 */
    static isIE() {
        if (!!window.ActiveXObject || "ActiveXObject" in window)
            return true;
        else
            return false;
    }
}