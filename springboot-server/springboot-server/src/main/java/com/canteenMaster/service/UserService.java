package com.canteenMaster.service;

import com.canteenMaster.model.USER_ROLE;
import com.canteenMaster.model.User;
import com.canteenMaster.repository.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private HttpServletRequest request;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(long id) {
        return userRepository.findById(id).orElse(null);
    }

    public User createUser(User user) {
        // Add any necessary validation or processing before saving the user
        return userRepository.save(user);
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

    public USER_ROLE getCurrentUserRole() {
        // Get the user's ID from the session
        Long userId = (Long) request.getSession().getAttribute("userId");
        if (userId != null) {
            // Fetch the user from the database using the ID
            User user = userRepository.findById(userId).orElse(null);
            if (user != null) {
                // Return the user's role
                return user.getRole();
            }
        }
        // If no user is logged in or the user's role cannot be determined, return null
        return null;
    }

    public ResponseEntity<?> findUserByEmail(String email) {
        User user = userRepository.findByEmail(email);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No user found with email: " + email);
        }
    }
}
