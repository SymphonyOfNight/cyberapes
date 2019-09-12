/**
 * @description 设置缓存
 * @param {String} name 缓存数据的名字
 * @param {*} value 缓存数据的值
 * @param {Number} expiredays 缓存数据的时间（天），默认关闭浏览器时失效。1/24 表示一个小时，1/24/60 表示一分钟
 */
export function setCookie(name, value, expiredays) {
    var expires = ''
    if (expiredays) {
        var exdate = new Date()
        exdate.setTime(exdate.getTime() + expiredays * (24 * 3600 * 1000))
        expires = 'expires=' + exdate.toUTCString()
    }
    document.cookie = name + '=' + escape(value) + ';' + expires
}

/**
 * @description 获取缓存的数据
 * @param {String} name 要获取的数据对应的名字
 * @return {*}
 */
export function getCookie(name) {
    var arr = document.cookie.split('; ')
    for (var i = 0, len = arr.length; i < len; i++) {
        var temp = arr[i].split('=')
        if (temp[0] === name) return unescape(temp[1])
    }
    return null
}

/**
 * @description 删除缓存中某些数据
 * @param {String} name 要删除的数据对应的名字
 */
export function removeCookie(name) {
    this.setCookie(name, '', -1)
}