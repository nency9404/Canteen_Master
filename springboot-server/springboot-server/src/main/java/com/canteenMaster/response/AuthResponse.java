package com.canteenMaster.response;

import com.canteenMaster.model.USER_ROLE;
import lombok.Data;

@Data
public class AuthResponse {
    private String message;
    private USER_ROLE role;
}
