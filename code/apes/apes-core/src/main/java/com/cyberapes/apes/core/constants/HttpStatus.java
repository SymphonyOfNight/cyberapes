package com.cyberapes.apes.core.constants;

import lombok.Getter;
import lombok.Setter;

/**
 * @author wangjie5
 * @description http状态码枚举
 * @date 2019/5/31 11:13
 */
public enum HttpStatus {
    /**
     * 成功
     */
    HTTP_STATUS_2XX("2XX","Success"),
    HTTP_STATUS_200("200","OK"),

    /**
     * 重定向
     */
    HTTP_STATUS_3XX("3XX","Redirection"),
    HTTP_STATUS_300("300","Multiple Choices"),

    /**
     * 请求错误
     */
    HTTP_STATUS_4XX("4XX","Client Error"),
    HTTP_STATUS_400("400","Bad Request"),
    HTTP_STATUS_401("401","Unauthorized"),
    HTTP_STATUS_402("402","Payment Required"),
    HTTP_STATUS_403("403","Forbidden"),
    HTTP_STATUS_404("404","Not Found"),
    HTTP_STATUS_405("405","Method Not Allowed"),
    HTTP_STATUS_406("406","Not Acceptable"),
    HTTP_STATUS_407("407","Proxy Authentication Required"),
    HTTP_STATUS_408("408","Request Timeout"),
    HTTP_STATUS_413("413","Request Entity Too Large"),
    HTTP_STATUS_414("414","Request-URI Too Long"),

    /**
     * 服务器错误
     */
    HTTP_STATUS_5XX("5XX","Server Error"),
    HTTP_STATUS_500("500","Internal Server Error"),
    HTTP_STATUS_501("501","Not Implemented"),
    HTTP_STATUS_502("502","Bad Gateway"),
    HTTP_STATUS_503("503","Service Unavailable"),
    HTTP_STATUS_504("504","Gateway Timeout"),
    HTTP_STATUS_505("505","HTTP Version Not Supported");

    @Getter @Setter
    private String code;

    @Getter @Setter
    private String desc;

    private HttpStatus(String code, String desc){
        this.code = code;
        this.desc = desc;
    }
}
