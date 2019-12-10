import axios from "axios";
import QS from "qs";
import { Message, Loading} from 'element-ui';


/**
 * 根据错误编码获取错误信息
 * @param code
 * @returns {string}
 */
function getErrorMessage(code) {
    switch (code) {
        case 408:
            return '网络异常';
        case 400:
            return '错误请求';
        case 401:
            return '未授权，请重新登录';
        case 403:
            return '拒绝访问';
        case 404:
            return '请求不存在';
        case 405:
            return '请求方法未允许';
        case 500:
            return '服务器异常';
        case 501:
            return '网络未实现';
        case 502:
            return '网络错误';
        case 503:
            return '服务不可用';
        case 504:
            return '网络超时';
        case 505:
            return 'http版本不支持该请求';
        default:
            return '请求错误：${code}';
    }
}

/**
 * 打开弹窗
 * @param code
 */
function openMessageBox(code) {
    Message({
        type: 'error',
        message: getErrorMessage(code)
    });
}

/**
 * 封装get方法
 * @param url
 * @param params
 * @returns {Promise<any>}
 */
export function get(url, params) {
    return new Promise((resolve, reject) =>{
        axios.get(url, {
            params: params
            })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}

/**
 * 封装post方法
 * @param url
 * @param params
 * @returns {Promise<any>}
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, QS.stringify(params))
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(openMessageBox(err.response.status));
            })
    });
}