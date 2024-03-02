package com.canteenMaster.service;

import com.canteenMaster.model.User;
import com.canteenMaster.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(long id) {
        return userRepository.findById(id).orElse(null);
    }

    public ResponseEntity<String> createUser(User user) {
        // Check if the email already exists in the database
        User existingUser = userRepository.findByEmail(user.getEmail());
        if (existingUser != null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email is already registered. Please sign in instead.");
        }

        // Proceed with user creation if the email is not already registered
        User savedUser = userRepository.save(user);

        // You can add additional logic here if needed

        return ResponseEntity.ok("User created successfully.");
    }

    public ResponseEntity<String> signinUser(String email, String password) {
        User user = userRepository.findByEmail(email);
        if (user != null && password.equals(user.getPassword())) {
            return ResponseEntity.ok("Login success");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }

    public User updateUser(long id, User user) {
        if (userRepository.existsById(id)) {
            user.setId(id);
            return userRepository.save(user);
        }
        return null;
    }

    public void deleteUser(long id) {
        userRepository.deleteById(id);
    }
}
