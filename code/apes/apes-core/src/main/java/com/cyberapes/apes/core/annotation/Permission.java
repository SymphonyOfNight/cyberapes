package com.cyberapes.apes.core.annotation;

import java.lang.annotation.*;

/**
 * 权限注解
 */
@Target({ElementType.TYPE,ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface Permission {

    /**
     * 功能模块
     * @return
     */
    String module();

    /**
     * 权限编码
     * @return
     */
    String value();

}
