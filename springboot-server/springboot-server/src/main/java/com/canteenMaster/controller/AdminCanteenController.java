package com.canteenMaster.controller;

import com.canteenMaster.model.Canteen;
import com.canteenMaster.model.User;
import com.canteenMaster.repository.UserRepository;
import com.canteenMaster.request.CreateCanteenRequest;
import com.canteenMaster.service.CanteenService;
import com.canteenMaster.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/canteens")
public class AdminCanteenController {
    @Autowired
    private CanteenService canteenService;

    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/create")
    public ResponseEntity<Canteen> createCanteen(
            @RequestBody CreateCanteenRequest req,
            @RequestParam("email") String userEmail
    ){
//        String email = user.getEmail();
        User existingUser = userRepository.findByEmail(userEmail);

        Canteen canteen = canteenService.createCanteen(req,existingUser);
        return new ResponseEntity<>(canteen,HttpStatus.CREATED);
    }
}
