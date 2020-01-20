package com.cyberapes.apes.member.user.impl;

import com.cyberapes.apes.member.user.model.UserVO;

/**
 * 用户服务接口
 */
public interface IUserService {

	/**
	 * 查询用户是否存在
	 * @param userVO
	 * @return
	 */
	int selectCountBy(UserVO userVO);

	/**
	 * 新增用户
	 * @param userVO
	 * @return
	 */
	int insert(UserVO userVO);

}