package dev.krishvora09.backend.aop;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class LoggingAspect {

    private static final Logger LOGGER = LoggerFactory.getLogger(LoggingAspect.class);

    @Before("execution(* dev.krishvora09.backend.service.JobService.*(..))")
    public void logMethodCall(JoinPoint jp) {
        LOGGER.info("Method called " + jp.getSignature().getName());
    }

    @After("execution(* dev.krishvora09.backend.service.JobService.*(..))")
    public void logMethodExecuted(JoinPoint jp) {
        LOGGER.info("Method Executed " + jp.getSignature().getName());
    }

    @AfterThrowing("execution(* dev.krishvora09.backend.service.JobService.*(..))")
    public void logMethodCrash(JoinPoint jp) {
        LOGGER.info("Method " + jp.getSignature().getName() + " has some issue");
    }

    @AfterReturning("execution(* dev.krishvora09.backend.service.JobService.*(..))")
    public void logMethodExecutedSuccess(JoinPoint jp) {
        LOGGER.info("Method " + jp.getSignature().getName() + " has been executed successfully");
    }

}
