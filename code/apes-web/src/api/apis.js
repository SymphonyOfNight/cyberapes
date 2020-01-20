import request from "./request";

/**
 * 用户登陆
 * @param params
 * @returns {*}
 */
export const PostUserLogin = params => request.POST('gateway/user/login', params)

/**
 * 用户注册
 * @param params
 * @returns {*}
 */
export const PostUserRegiste = params => request.POST('gateway/user/registe', params)

/**
 * 获取文章列表
 * @param params
 * @returns {*}
 */
export const GetArticleList = params => request.GET('gateway/user/getArticles', params)

/**
 * 获取文章列表
 * @param params
 * @returns {*}
 */
export const GetArticleDetail = params => request.GET('gateway/user/getArticles', params)