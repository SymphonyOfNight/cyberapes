package com.cyberapes.apes.core.annotation;

import java.lang.annotation.*;

/**
 * 权限注解
 */
@Target({ElementType.TYPE,ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface AuthAccess {

    /**
     * 权限编码
     * @return
     */
    String value();

    /**
     * 权限描述
     * @return
     */
    String desc();

}
