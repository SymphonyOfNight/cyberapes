package com.cyberapes.apes.core.utils;

/**
 * 分布式id生成工具类
 */
public interface IIdGenerator {

    /**
     * 生成下个id
     * @return
     */
    public abstract Long nextId();

}
