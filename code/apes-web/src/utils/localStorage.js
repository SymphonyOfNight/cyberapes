
/**
 * @description 获取localStorage对象，兼容android（android原生系统老系统不支持localstorage）
 * @return localStorage对象
 */
export function uzStorage() {
    var ls = window.localStorage
    var isAndroid = (/android/gi).test(window.navigator.appVersion)
    if (isAndroid) ls = os.localStorage()
    return ls
}

/**
 * @description 设置本地储存
 * @param {String} key 储存的名字
 * @param {*} value 储存的值
 */
export function setStorage(key, value) {
    var v = value
    var ls = this.uzStorage()
    if (typeof v === 'object') {
        v = JSON.stringify(v)
        v = 'obj-' + v
    }
    if (ls) ls.setItem(key, v)
}

/**
 * @description 获取本地储存的数据
 * @param {String} key 要获取的数据对应的名字
 * @return {*}
 */
export function getStorage(key) {
    var ls = this.uzStorage()
    if (ls) {
        var v = ls.getItem(key)
        if (!v) return
        if (v.indexOf('obj-') === 0) return JSON.parse(v.slice(4))
        else return v
    }
}

/**
 * @description 删除本地储存中某些数据
 * @param {String} key 要删除的数据对应的名字
 */
export function removeStorage(key) {
    var ls = this.uzStorage()
    if (ls && key) ls.removeItem(key)
}

/**
 * @description 清空本地储存的所有数据
 */
export function clearStorage() {
    var ls = this.uzStorage()
    if (ls) ls.clear()
}