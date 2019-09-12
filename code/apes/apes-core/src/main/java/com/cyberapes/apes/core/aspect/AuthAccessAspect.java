package com.cyberapes.apes.core.aspect;

import com.cyberapes.apes.core.annotation.AuthAccess;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

/**
 * @author wangjie5
 * @description 权限拦截切面实现
 * @date 2019/7/11
 */
@Component
@Aspect
public class AuthAccessAspect {

    @Pointcut("@annotation(com.cyberapes.apes.core.annotation.AuthAccess)")
    public void AuthAccessPointcut(){

    }


    @Around("AuthAccessPointcut()&&@annotation(authAccess)")
    public Object advice(ProceedingJoinPoint joinPoint, AuthAccess authAccess) throws  Throwable {

        authAccess.value();

        return null;
    }

}
