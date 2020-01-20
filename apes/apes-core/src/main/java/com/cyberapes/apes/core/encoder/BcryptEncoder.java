package com.cyberapes.apes.core.encoder;

import org.apache.commons.lang3.StringUtils;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;

/**
 * @author wangjie5
 * @description spring security bcrypt加密封装
 * @date 2019/8/1
 */
public class BcryptEncoder {

    /**
     * 获取PasswordEncoder对象，默认以bcrypt方式加密
     * @return
     */
    private static PasswordEncoder passwordEncoder(){
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    /**
     * 加密
     * @param str
     * @return
     */
    public static String encode(String str){
        return passwordEncoder().encode(str);
    }

    /**
     * 检查是否相等(都为null或空值时返回false)
     * @param str
     * @param encodeStr
     * @return
     */
    public static boolean equals(String str, String encodeStr){
        if(StringUtils.isEmpty(str) && StringUtils.isEmpty(encodeStr)){
            return false;
        }
        return passwordEncoder().matches(str, encodeStr);
    }
}
