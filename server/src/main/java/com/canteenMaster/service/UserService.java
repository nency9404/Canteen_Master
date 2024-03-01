package com.canteenMaster.service;

import com.canteenMaster.model.User;

public interface UserService {
    public User findUserByJwtToken(String jwt) throws Exception;
    public User finduserByEmail(String email) throws Exception;
}
