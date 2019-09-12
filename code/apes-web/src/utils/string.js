/**
 * 是否为空
 * @param val
 * @returns {boolean}
 */
export function isNull(val) {
    if (val == undefined || val == null || val == "" || val == ''
        || val == "undefined" || val == "null" || val == "NULL") {
        return true;
    }
    return false;
}

/**
 * 是否不为空
 * @param val
 * @returns {boolean}
 */
export function isNotNull(val) {
    return !this.isNull(val);
}

/**
 * 是否为空字符串
 * @param str
 * @returns {*}
 */
export function isEmpty(str) {
    str = str.replace(/(^\s*)|(\s*$)/g, ""); //去除前后空格
    return this.isNull(str);
}

/**
 * 是否非空字符串
 * @param str
 * @returns {boolean}
 */
export function isNotEmpty(str) {
    str = str.replace(/(^\s*)|(\s*$)/g, ""); //去除前后空格
    return !this.isEmpty(str);
}

/**
 * 字符串编码
 * @param source
 * @returns {string}
 */
export function strEncode(source) {
    return encodeURIComponent(source);
}

/**
 * 字符串解码
 * @param source
 * @returns {string}
 */
export function strDencode(source) {
    return decodeURIComponent(source);
}

/**
 * 格式化日期
 * @param date Date对象、String、数字
 * @param format String，比如："yyyy-MM-dd hh:mm:ss"
 * @returns 格式化后的字符串
 */
export function formatDate(date, format) {
    if (!date) return;
    if (!format) format = "yyyy-MM-dd";
    switch (typeof date) {
        case "string":
            date = new Date(date.replace(/-/, "/"));
            break;
        case "number":
            date = new Date(date);
            break;
    }
    if (!date instanceof Date) return;
    var dict = {
        "yyyy": date.getFullYear(),
        "M": date.getMonth() + 1,
        "d": date.getDate(),
        "h": date.getHours(),
        "m": date.getMinutes(),
        "s": date.getSeconds(),
        "MM": ("" + (date.getMonth() + 101)).substr(1),
        "dd": ("" + (date.getDate() + 100)).substr(1),
        "hh": ("" + (date.getHours() + 100)).substr(1),
        "mm": ("" + (date.getMinutes() + 100)).substr(1),
        "ss": ("" + (date.getSeconds() + 100)).substr(1)
    };
    return format.replace(/(yyyy|MM?|dd?|hh?|ss?|mm?)/g, function () {
        return dict[arguments[0]];
    });
}

/**
 * 时间转换为字符串
 * @param time
 * @param cFormat
 * @returns {*}
 */
export function parseTime(time, cFormat) {
    if (arguments.length === 0) {
        return null
    }
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
    let date
    if (typeof time === 'object') {
        date = time
    } else {
        if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
            time = parseInt(time)
        }
        if ((typeof time === 'number') && (time.toString().length === 10)) {
            time = time * 1000
        }
        date = new Date(time)
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    }
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
        let value = formatObj[key]
        // Note: getDay() returns 0 on Sunday
        if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
        if (result.length > 0 && value < 10) {
            value = '0' + value
        }
        return value || 0
    })
    return time_str
}

/**
 * 时间差(向下取整，超出48小时时返回具体日期)
 * @param time
 * @param option
 * @returns {*}
 */
export function formatTime(time, option) {
    time = parseTime(time, option)
    const d = new Date(time)
    const now = Date.now()

    const diff = (now - d) / 1000

    if (diff < 30) {
        return '刚刚'
    } else if (diff < 3600) {
        // less 1 hour
        return Math.floor(diff / 60) + '分钟前'
    } else if (diff < 3600 * 24) {
        return Math.floor(diff / 3600) + '小时前'
    } else if (diff < 3600 * 24 * 2) {
        return '1天前'
    }
    return time
}

/**
 *
 * @desc  判断是否为身份证号
 * @param  {String|Number} str
 * @return {Boolean}
 */
export function isIdCard(str) {
    return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str)
}

/**
 *
 * @desc   判断是否为手机号
 * @param  {String|Number} str
 * @return {Boolean}
 */
export function isPhoneNum(str) {
    return /^(0|86|17951)?(1[3-9][0-9])[0-9]{8}$/.test(str)
}