package com.mkrp.utils;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;
import java.util.Arrays;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class APIError extends RuntimeException {

    private final HttpStatus statusCode;
    private final String message;
    private final String[] errors;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    private final LocalDateTime timestamp;

    public APIError(HttpStatus statusCode, String message, String[] errors) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.errors = errors != null ? Arrays.copyOf(errors, errors.length) : new String[0];
        this.timestamp = LocalDateTime.now();
    }

    public HttpStatus getStatusCode() {
        return statusCode;
    }

    @Override
    public String getMessage() {
        return message;
    }

    public String[] getErrors() {
        return Arrays.copyOf(errors, errors.length);
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    @Override
    public String toString() {
        return "APIError{" +
                "statusCode=" + statusCode +
                ", message='" + message + '\'' +
                ", errors=" + Arrays.toString(errors) +
                ", timestamp=" + timestamp +
                '}';
    }
}
