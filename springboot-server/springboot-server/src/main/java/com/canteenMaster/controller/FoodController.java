package com.canteenMaster.controller;

import com.canteenMaster.model.Food;
import com.canteenMaster.service.CanteenService;
import com.canteenMaster.service.FoodService;
import com.canteenMaster.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/api/food")
@CrossOrigin(origins = "http://localhost:3000")
public class FoodController {

    @Autowired
    private FoodService foodService;

    @Autowired
    private UserService userService;

    @Autowired
    private CanteenService canteenService;

    @GetMapping("/search")
    public ResponseEntity<List<Food>> searchFood(@RequestParam String name) throws Exception {
        List<Food> foods = foodService.searchFood(name);

        return new ResponseEntity<>(foods,HttpStatus.CREATED);

    }

    @GetMapping("/canteen/{canteenId}")
    public ResponseEntity<List<Food>> getCanteenFood(
            @RequestParam(required = false) String food_category,
            @PathVariable Long canteenId
    ) throws Exception {
        List<Food> foods = foodService.getCanteenFood(canteenId,food_category);

        return new ResponseEntity<>(foods,HttpStatus.OK);

    }
}
