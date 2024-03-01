//package com.canteenMaster.controller;
//
//import com.canteenMaster.model.Canteen;
//import com.canteenMaster.request.CreateCanteenRequest;
//import com.canteenMaster.service.CanteenService;
//import com.canteenMaster.service.UserService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestHeader;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequestMapping("/api/admin/canteens")
//public class AdminCanteenController {
//    @Autowired
//    private CanteenService canteenService;
//
//    @Autowired
//    private UserService userService;
//
//    public ResponseEntity<Canteen> createCanteen(
//            @RequestBody CreateCanteenRequest req,
//            @RequestHeader("Authorization") String jwt
//            ){
//        return null;
//    }
//}
