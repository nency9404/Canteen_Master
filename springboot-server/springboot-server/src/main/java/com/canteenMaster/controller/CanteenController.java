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

import java.util.List;

@RestController
@RequestMapping("/api/canteens")
@CrossOrigin(origins = "http://localhost:3000")
public class CanteenController {

    @Autowired
    private CanteenService canteenService;

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @GetMapping()
    public ResponseEntity<List<Canteen>> getAllCanteens(
    ){

        List<Canteen> canteen = canteenService.getAllCanteen();
        return new ResponseEntity<>(canteen,HttpStatus.OK);
    }
}
