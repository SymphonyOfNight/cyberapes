package com.cyberapes.apes.core.model;


import lombok.Data;

import java.io.Serializable;

@Data
public class UserVO implements Serializable {

    private static final long serialVersionUID = -1L;

    /**
     * 登陆人id
     */
    protected long userId;

    /**
     * 登陆人名称
     */
    protected String userName;

    /**
     * 登陆人组织id
     */
    protected long orgId;

    /**
     * 登陆人组织编码
     */
    protected String orgCode;

    /**
     * 登陆人组织名称
     */
    protected String orgName;

    /**
     * 登陆人移动电话
     */
    protected String phone;

    /**
     * 登陆人固定电话
     */
    protected String tel;

    /**
     * 登陆人邮箱
     */
    protected String email;

}
