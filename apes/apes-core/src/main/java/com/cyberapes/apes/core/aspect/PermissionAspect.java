package com.cyberapes.apes.core.aspect;

import com.cyberapes.apes.core.annotation.Permission;
import com.cyberapes.apes.core.exception.ForbiddenException;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.stereotype.Component;

import java.lang.reflect.Method;

/**
 * @author wangjie5
 * @description 权限拦截切面实现
 * @date 2019/7/11
 */
@Component
@Aspect
@Slf4j
public class PermissionAspect {

    //统一切点，对有OperationLog注解的方法进行切面
    @Pointcut("@annotation(com.cyberapes.apes.core.annotation.Permission)")
    public  void pointCut() {

    }
    //前置通知
    @Before("pointCut()")
    public void beforeMethod(JoinPoint joinPoint){
        MethodSignature signature = (MethodSignature) joinPoint.getSignature();
        Method method = signature.getMethod();
        Permission annotation = signature.getMethod().getAnnotation(Permission.class);
        if(annotation!=null && annotation.module()!=null && annotation.value()!=null){
            if(!hasPermissionCheck()){
                throw new ForbiddenException();
            }
        }
    }

    //@After: 后置通知
    @After("pointCut()")
    public void afterMethod(JoinPoint joinPoint){

    }

    //@AfterRunning: 返回通知 result为返回内容
    @AfterReturning(value="pointCut()",returning="result")
    public void afterReturningMethod(JoinPoint joinPoint,Object result){

    }

    //@AfterThrowing: 异常通知
    @AfterThrowing(value="pointCut()",throwing="e")
    public void afterReturningMethod(JoinPoint joinPoint, Exception e){

    }

    //@Around：环绕通知
    @Around("pointCut()")
    public Object Around(ProceedingJoinPoint pjp) throws Throwable {
        log.info("around执行方法之前");
        Object object = pjp.proceed();
        log.info("around执行方法之后--返回值：" +object);
        return object;
    }

    private boolean hasPermissionCheck(){
        return false;
    }
}
