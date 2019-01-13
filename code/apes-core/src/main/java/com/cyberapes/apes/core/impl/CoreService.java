package com.cyberapes.apes.core.impl;

import com.cyberapes.apes.core.api.ICoreService;
import com.cyberapes.apes.core.mapper.ICoreMapper;
import com.cyberapes.apes.core.entity.CoreVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author Wang
 *
 */
@Service
public class CoreService implements ICoreService {

	@Autowired
	private ICoreMapper userDao;
	
	@Override
	public CoreVO getUserInfo(String userId) {
		return userDao.findUserById(userId);
	}

}