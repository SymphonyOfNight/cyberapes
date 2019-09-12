package com.cyberapes.apes.member.user.mapper;

import jdk.nashorn.internal.runtime.logging.Logger;
import org.springframework.stereotype.Repository;

import com.cyberapes.apes.member.user.model.UserVO;
import org.springframework.web.bind.annotation.SessionAttributes;


@Repository
public interface UserDao {

    int deleteByPrimaryKey(Integer userId);

    int insert(UserVO record);

    int insertSelective(UserVO record);

    UserVO selectByPrimaryKey(Integer userId);

    int updateByPrimaryKey(UserVO record);

    int updateByPrimaryKeySelective(UserVO record);

    int selectCountBy(UserVO record);
}
