package com.cyberapes.apes.core.annotation;

import java.lang.annotation.*;

/**
 * 操作日志注解
 */
@Target({ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface Operate {

    /**
     * 操作类型
     * @return
     */
    String opt();

    /**
     * 操作描述
     * @return
     */
    String desc();

}
