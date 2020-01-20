package com.cyberapes.apes.core.utils;

/**
 * @author wangjie5
 * @description 16进制转换工具类
 * @date 2019/8/1
 */
public class HexUtils {

    /**
     * 16进制字符
     */
    private static final String[] chars = {"0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"};

    /**
     * byte数组转换为16进制字符串
     * @param b
     * @return
     */
    public static String byteArrayToHexString(byte[] b){
        StringBuilder sb = new StringBuilder(32);
        for(int i = 0; i < b.length; i++){
            sb.append(byteToHexString(b[i]));
        }
        return sb.toString();
    }

    /**
     * byte转换为16进制字符串
     * @param b
     * @return
     */
    public static String byteToHexString(byte b){
        StringBuilder sb = new StringBuilder(32);
        // 取得高位
        int h = 0x0f & (b >>> 4);
        // 取得低位
        int l = 0x0f & b;
        sb.append(chars[h]).append(chars[l]);
        return sb.toString();
    }
}
