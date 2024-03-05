package com.canteenMaster.controller;

import com.canteenMaster.model.Canteen;
import com.canteenMaster.model.User;
import com.canteenMaster.repository.UserRepository;
import com.canteenMaster.request.CreateCanteenRequest;
import com.canteenMaster.response.MessageResponse;
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

    @PutMapping("/{id}")
    public ResponseEntity<Canteen> updateCanteen(
            @RequestBody CreateCanteenRequest req,
            @RequestParam("email") String userEmail,
            @PathVariable Long id
    ) throws Exception {
//        String email = user.getEmail();
        User existingUser = userRepository.findByEmail(userEmail);

        Canteen canteen = canteenService.updateCanteen(id,req);
        return new ResponseEntity<>(canteen,HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<MessageResponse> deleteCanteen(
            @PathVariable Long id
    ) throws Exception {
        canteenService.deleteCanteen(id);

        MessageResponse res = new MessageResponse();
        res.setMessage("Canteen Deleted successfully");
        return new ResponseEntity<>(res,HttpStatus.OK);
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<Canteen> updateCanteenStatus(
            @PathVariable Long id
    ) throws Exception {


        Canteen canteen = canteenService.updateCanteenStatus(id);

        return new ResponseEntity<>(canteen,HttpStatus.OK);
    }

    @GetMapping("/status")
    public ResponseEntity<Canteen> findCanteenByUserId(
            @RequestParam("email") String userEmail
    ) throws Exception {
//        String email = user.getEmail();
        User existingUser = userRepository.findByEmail(userEmail);

        Canteen canteen = canteenService.getCanteenByUserId(existingUser.getId());

        return new ResponseEntity<>(canteen,HttpStatus.OK);
    }
}
