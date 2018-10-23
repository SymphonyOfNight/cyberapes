package com.cyberapes.apes.core.dao;

import com.cyberapes.apes.core.entity.UserVO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface IUserDao {

    UserVO findUserById(String userId);

}