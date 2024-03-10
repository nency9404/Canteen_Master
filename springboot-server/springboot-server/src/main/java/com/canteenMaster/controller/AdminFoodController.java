package com.canteenMaster.controller;

import com.canteenMaster.model.Canteen;
import com.canteenMaster.model.Food;
import com.canteenMaster.model.User;
import com.canteenMaster.request.CreateFoodRequest;
import com.canteenMaster.response.MessageResponse;
import com.canteenMaster.service.CanteenService;
import com.canteenMaster.service.FoodService;
import com.canteenMaster.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/food")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminFoodController {

    @Autowired
    private FoodService foodService;

    @Autowired
    private UserService userService;

    @Autowired
    private CanteenService canteenService;

    @PostMapping
    public ResponseEntity<?> createFood(
            @RequestBody CreateFoodRequest req
//            @RequestParam("email") String userEmail
            ) throws Exception {

//        ResponseEntity<?> existingUserResponse = userService.findUserByEmail(userEmail);

        // If the user exists
//        if (existingUserResponse.getStatusCode() == HttpStatus.OK) {
//            User existingUser = (User) existingUserResponse.getBody();

            Canteen canteen = canteenService.findCanteenById(req.getCanteenId());
            Food food = foodService.createFood(req,req.getCategory(),canteen);

            return new ResponseEntity<>(food,HttpStatus.CREATED);
//        } else {
//            // If no user found, return the response as is
//            return existingUserResponse;
//        }
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<MessageResponse> deleteFood(@PathVariable Long id) throws Exception {
        foodService.deleteFood(id);
        MessageResponse res = new MessageResponse();
        res.setMessage("Food deleted successfully");

        return new ResponseEntity<>(res,HttpStatus.CREATED);

    }

    @PutMapping("/{id}")
    public ResponseEntity<Food> updateFoodAvaibilityStatus(@PathVariable Long id) throws Exception {

        Food food = foodService.updateAvailabilityStatus(id);
        return new ResponseEntity<>(food,HttpStatus.CREATED);

    }
}
