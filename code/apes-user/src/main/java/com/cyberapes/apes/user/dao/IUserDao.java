package com.cyberapes.apes.user.dao;

import com.cyberapes.apes.user.entity.UserVO;

public interface IUserDao {

    /**
     * 单条删除
     * @param userId
     * @return
     */
    int deleteByPrimaryKey(String userId);

    /**
     * 单条插入
     * @param record
     * @return
     */
    int insert(UserVO record);

    /**
     * 批量插入
     * @param record
     * @return
     */
    int insertSelective(UserVO record);

    /**
     * 查询VO
     * @param userId
     * @return
     */
    UserVO selectByPrimaryKey(String userId);

    /**
     * 更新
     * @param record
     * @return
     */
    int updateByPrimaryKeySelective(UserVO record);

    /**
     * 根据id进行更新
     * @param record
     * @return
     */
    int updateByPrimaryKey(UserVO record);
}