package com.cyberapes.apes.member.user.impl;

import com.cyberapes.apes.member.user.mapper.UserDao;
import com.cyberapes.apes.member.user.model.UserVO;
import com.cyberapes.apes.member.user.impl.IUserService;

import org.springframework.beans.factory.annotation.Autowired;

 /**
  * @description TODO
  * @author wangjie5
  * @date 2019/3/1
  */
public class UserService implements IUserService {

	 /**
	  * 注入mapper
	  */
	 @Autowired
	 private UserDao userDao;

	 @Override
	 public int selectCountBy(UserVO userVO) {
		 return userDao.selectCountBy(userVO);
	 }

	 @Override
	 public int insert(UserVO userVO) {
		 userVO.setPwd(userVO.getPwd());
		 return userDao.insert(userVO);
	 }
 }
