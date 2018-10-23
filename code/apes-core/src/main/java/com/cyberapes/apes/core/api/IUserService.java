package com.cyberapes.apes.core.api;

import com.cyberapes.apes.core.entity.UserVO;

public interface IUserService {
	
	UserVO getUserInfo(String userId);
}
