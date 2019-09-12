package com.cyberapes.apes.core.encoder;

import com.cyberapes.apes.core.utils.HexUtils;
import org.apache.commons.lang3.StringUtils;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;

/**
 * @author wangjie5
 * @description SHA1加密算法实现
 * @date 2019/8/1
 */
public class SHA1Encoder {

    /**
     * 加密
     * @param str
     * @return
     */
    public static String encode(String str) {
        if(StringUtils.isNotEmpty(str)){
            try {
                // 消息签名（摘要）参数代表的是算法名称
                MessageDigest md = MessageDigest.getInstance("SHA256");

                md.update(str.getBytes());
                byte[] result = md.digest();
                return HexUtils.byteArrayToHexString(result);
            } catch (NoSuchAlgorithmException e) {
                throw new RuntimeException(e);
            }
        }
        return null;
    }

    /**
     * 检查是否相等（都为null或空时返回false）
     * @param str
     * @param encodeStr
     * @return
     */
    public static boolean equals(String str, String encodeStr){
        if(StringUtils.isNotEmpty(str) && StringUtils.isNotEmpty(encodeStr)){
            if(encode(str).equals(encodeStr)){
                return true;
            }
            return false;
        }
        return false;
    }
}
