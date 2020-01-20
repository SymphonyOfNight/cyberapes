package com.cyberapes.apes.member.user.model;

import lombok.Data;

import java.io.Serializable;
import java.util.Date;

/**
* Created by Mybatis Generator 2019/02/20
*/
@Data
public class UserVO implements Serializable {

    private static final long serialVersionUID = 7178211110967526549L;
    /**
     * 用户id
     */
    private Integer userId;

    /**
     * 登陆账号
     */
    private String userAccount;

    /**
     * 用户名
     */
    private String userName;

    /**
     * 密码
     */
    private String pwd;

    /**
     * 电话
     */
    private String phone;

    /**
     * 性别
     */
    private String sex;

    /**
     * 邮箱
     */
    private String email;

    /**
     * 用户标识
     */
    private String mark;

    /**
     * 用户等级
     */
    private String userRank;

    /**
     * 上次登录时间
     */
    private Date lastLogin;

    /**
     * 上次登录ip
     */
    private String loginIp;

    /**
     * 头像
     */
    private String imageUrl;

    /**
     * 注册时间
     */
    private Date regTime;

    /**
     * 是否锁定
     */
    private Boolean locked;

    /**
     * 创建时间
     */
    private Date createTime;

    /**
     * 创建人id
     */
    private Integer creator;

    /**
     * 创建人姓名
     */
    private Integer creatorName;

    /**
     * 最后更新时间
     */
    private Date lastUpdateTime;

    /**
     * 最后更新人id
     */
    private Date lastUpdateId;

    /**
     * 最后更新人名称
     */
    private Date lastUpdateName;
}