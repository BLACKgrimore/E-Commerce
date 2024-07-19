package com.mkrp.service;

import com.mkrp.exception.UserException;
import com.mkrp.model.User;

public interface UserService  {

    public User findUserById(Long id) throws UserException;

    public User findProfileByJwt(String jwt) throws UserException;

}
