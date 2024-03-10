package com.canteenMaster.controller;

import com.canteenMaster.model.Category;
import com.canteenMaster.model.User;
import com.canteenMaster.service.CategoryService;
import com.canteenMaster.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private UserService userService;

    @PostMapping("/admin/category")
    public ResponseEntity<?> createCategory(
            @RequestBody Category category,
            @RequestParam("email") String userEmail
            ) throws Exception {
        ResponseEntity<?> existingUserResponse = userService.findUserByEmail(userEmail);

        // If the user exists
        if (existingUserResponse.getStatusCode() == HttpStatus.OK) {
            User existingUser = (User) existingUserResponse.getBody();

           Category createdCategory = categoryService.createCategory(category.getName(),existingUser.getId());

            return new ResponseEntity<>(createdCategory,HttpStatus.CREATED);
        } else {
            // If no user found, return the response as is
            return existingUserResponse;
        }
    }

    @GetMapping("/category/canteen")
    public ResponseEntity<?> getCanteenCategory(
            @RequestParam("email") String userEmail
    ) throws Exception {
        ResponseEntity<?> existingUserResponse = userService.findUserByEmail(userEmail);

        // If the user exists
        if (existingUserResponse.getStatusCode() == HttpStatus.OK) {
            User existingUser = (User) existingUserResponse.getBody();

            List<Category> categories = categoryService.findCategoryByCanteenId(existingUser.getId());

            return new ResponseEntity<>(categories,HttpStatus.CREATED);
        } else {
            // If no user found, return the response as is
            return existingUserResponse;
        }
    }
}
