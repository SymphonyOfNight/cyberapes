package com.cyberapes.apes.core.impl;

import com.cyberapes.apes.core.api.IUserService;
import com.cyberapes.apes.core.dao.IUserDao;
import com.cyberapes.apes.core.entity.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author Wang
 *
 */
@Service
public class UserService implements IUserService {

	@Autowired
	private IUserDao userDao;
	
	@Override
	public UserVO getUserInfo(String userId) {
		return userDao.findUserById(userId);
	}

}