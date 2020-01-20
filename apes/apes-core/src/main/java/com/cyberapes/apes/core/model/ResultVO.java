package com.cyberapes.apes.core.model;

import lombok.Data;

import java.io.Serializable;
import java.util.List;

/**
 * @author wangjie5
 * @description 状态信息通用返回对象
 * @date 2019/6/29
 */
@Data
public class ResultVO implements Serializable {

    private static final long serialVersionUID = -875817025192923231L;
    /**
     * 返回标示1：成功；-1：失败；正数：成功；负数：失败
     */
    private int flag;

    /**
     * 返回信息编码
     */
    private String code;

    /**
     * 返回信息
     */
    private String message;

    /**
     * 多个返回信息编码
     */
    private List<String> codeList;

    /**
     * 多个返回信息
     */
    private List<String> messageList;
}