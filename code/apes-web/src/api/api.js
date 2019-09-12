// import {get, post} from 'http.js'
import {get, post} from "./http";

/**
 * 用户登陆
 * @param params
 * @returns {*}
 */
export const PostUserLogin = params => post('gateway/user/login', params)

/**
 * 用户注册
 * @param params
 * @returns {*}
 */
export const PostUserRegiste = params => post('gateway/user/registe', params)

