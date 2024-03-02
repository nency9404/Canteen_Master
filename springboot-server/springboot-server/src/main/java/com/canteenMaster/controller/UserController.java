package com.canteenMaster.controller;

import com.canteenMaster.model.Cart;
import com.canteenMaster.model.User;
import com.canteenMaster.repository.CartRepository;
import com.canteenMaster.repository.UserRepository;
import com.canteenMaster.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;


    @Autowired
    private CartRepository cartRepository;

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable long id) {
        return userService.getUserById(id);
    }

    @PostMapping("/signup")
    public ResponseEntity<String> createUser(@RequestBody User user) throws Exception {
        User isEmailExist = userRepository.findByEmail(user.getEmail());
        if(isEmailExist!=null){
            return ResponseEntity.ok("Email id connected with another account...");
        }

        User createdUser = new User();
        createdUser.setEmail(user.getEmail());
        createdUser.setFullName(user.getFullName());
        createdUser.setRole(user.getRole());
        createdUser.setPassword(user.getPassword());

        User savedUser = userRepository.save(createdUser);

        Cart cart = new Cart();
        cart.setCustomer(savedUser);
        cartRepository.save(cart);


        return ResponseEntity.ok("User created successfully.");
    }

    @PostMapping("/signin")
    public ResponseEntity<String> signin(@RequestBody User user) {
        String email = user.getEmail();
        String password = user.getPassword();

        User existingUser = userRepository.findByEmail(email);

        if (existingUser != null && password.equals(existingUser.getPassword())) {
            // If both email and password match, return a success message
            return ResponseEntity.ok("Logged in successfully.");
        } else {
            // If the user doesn't exist or the password doesn't match, return a message to sign up
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password. Please sign up.");
        }
    }


    @PutMapping("/{id}")
    public User updateUser(@PathVariable long id, @RequestBody User user) {
        return userService.updateUser(id, user);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable long id) {
        userService.deleteUser(id);
    }
}
