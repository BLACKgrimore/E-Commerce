package com.mkrp.utils;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

@RestControllerAdvice
public class AsyncHandler {

    private static final Logger logger = LoggerFactory.getLogger(AsyncHandler.class);
    private final ExecutorService executorService = Executors.newFixedThreadPool(10);

    @ResponseBody
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @RequestMapping("/error")
    public String handleError(Exception e) {
        logger.error("Error occurred: ", e);
        return "Error: " + e.getMessage();
    }

    @ExceptionHandler(RuntimeException.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public String handleRuntimeException(RuntimeException e) {
        logger.error("Runtime exception: ", e);
        return "Runtime Error: " + e.getMessage();
    }

    public <T> CompletableFuture<T> asyncHandler(RequestHandler<T> requestHandler) {
        return CompletableFuture.supplyAsync(() -> {
            try {
                return requestHandler.handleRequest();
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }, executorService).handle((result, error) -> {
            if (error != null) {
                logger.error("Async error: ", error);
                throw new RuntimeException(error);
            }
            return result;
        });
    }

    public interface RequestHandler<T> {
        T handleRequest() throws Exception;
    }
}
