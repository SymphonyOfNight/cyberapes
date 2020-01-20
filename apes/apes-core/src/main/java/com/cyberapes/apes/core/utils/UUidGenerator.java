package com.cyberapes.apes.core.utils;

import java.util.UUID;

public class UUidGenerator{
    /**
     * 生成UUID（省略-）
     * @return
     */
    public String getShortId() {
        return UUID.randomUUID().toString().replaceAll("-","").toUpperCase();
    }

    /**
     * 生成UUID
     * @return
     */
    public String getId(){
        return UUID.randomUUID().toString();
    }
}
