package com.canteenMaster.controller;

import com.canteenMaster.model.Canteen;
import com.canteenMaster.model.CartItem;
import com.canteenMaster.model.ItemsOrder;
import com.canteenMaster.model.User;
import com.canteenMaster.request.AddCartItemRequest;
import com.canteenMaster.request.OrderRequest;
import com.canteenMaster.service.OrderService;
import com.canteenMaster.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @Autowired
    private UserService userService;

    @PutMapping("/order")
    public ResponseEntity<?> createOrder(
            @RequestBody OrderRequest req,
            @RequestParam("email") String userEmail
            ) throws Exception {
        ResponseEntity<?> existingUserResponse = userService.findUserByEmail(userEmail);

        // If the user exists
        if (existingUserResponse.getStatusCode() == HttpStatus.OK) {
            User existingUser = (User) existingUserResponse.getBody();

            ItemsOrder order = orderService.createOrder(req,existingUser);

            // Return canteen details along with existing user
            return new ResponseEntity<>(order,HttpStatus.OK);
        } else {
            // If no user found, return the response as is
            return existingUserResponse;
        }
    }

    @GetMapping("/order/user")
    public ResponseEntity<?> getOrderHistory(
            @RequestBody OrderRequest req,
            @RequestParam("email") String userEmail
    ) throws Exception {
        ResponseEntity<?> existingUserResponse = userService.findUserByEmail(userEmail);

        // If the user exists
        if (existingUserResponse.getStatusCode() == HttpStatus.OK) {
            User existingUser = (User) existingUserResponse.getBody();

            List<ItemsOrder> orders = orderService.getUsersOrder(existingUser.getId());

            // Return canteen details along with existing user
            return new ResponseEntity<>(orders,HttpStatus.OK);
        } else {
            // If no user found, return the response as is
            return existingUserResponse;
        }
    }
}
