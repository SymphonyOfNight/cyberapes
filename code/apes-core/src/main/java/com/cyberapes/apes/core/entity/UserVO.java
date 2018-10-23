package com.cyberapes.apes.core.entity;

import java.io.Serializable;

public class UserVO implements Serializable {


	private static final long serialVersionUID = 8866014455049997271L;
	
	private String userId;
	
	private String userName;

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}
	
}
