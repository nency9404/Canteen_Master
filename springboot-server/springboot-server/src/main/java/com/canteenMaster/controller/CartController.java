package com.canteenMaster.controller;

import com.canteenMaster.model.Cart;
import com.canteenMaster.model.CartItem;
import com.canteenMaster.model.User;
import com.canteenMaster.repository.UserRepository;
import com.canteenMaster.request.AddCartItemRequest;
import com.canteenMaster.request.UpdateCartItemRequest;
import com.canteenMaster.service.CartService;
import com.canteenMaster.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class CartController {

    @Autowired
    private CartService cartService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @PutMapping("/cart/add")
    public ResponseEntity<CartItem> addItemToCart(
            @RequestBody AddCartItemRequest req,
            @RequestParam("email") String userEmail
            ) throws Exception {
        CartItem cartItem = cartService.addCartItem(req,userEmail);

        return new ResponseEntity<>(cartItem, HttpStatus.OK);
    }

    @PutMapping("/cart-item/update")
    public ResponseEntity<CartItem> updateCartItemQuantity(
            @RequestBody UpdateCartItemRequest req
    ) throws Exception {

        CartItem cartItem = cartService.updateItemQuantity(req.getCartItemId(), req.getQuantity());

        return new ResponseEntity<>(cartItem, HttpStatus.OK);
    }

    @DeleteMapping("/cart-item/{id}/remove")
    public ResponseEntity<Cart> removeCartItem(
            @PathVariable Long id,
            @RequestParam("email") String userEmail
    ) throws Exception {

        Cart cart = cartService.removeItemFromCart(id,userEmail);

        return new ResponseEntity<>(cart, HttpStatus.OK);
    }

    @PutMapping("/cart/clear")
    public ResponseEntity<Cart> clearCart(
            @RequestParam("email") String userEmail
    ) throws Exception {
        ResponseEntity<?> existingUserResponse = userService.findUserByEmail(userEmail);
        User existingUser = (User) existingUserResponse.getBody();
        Cart cart = cartService.clearCart(existingUser.getId());

        return new ResponseEntity<>(cart, HttpStatus.OK);
    }

    @GetMapping("/cart")
    public ResponseEntity<Cart> findUserCart(
            @RequestParam("email") String userEmail
    ) throws Exception {

        ResponseEntity<?> existingUserResponse = userService.findUserByEmail(userEmail);
        User existingUser = (User) existingUserResponse.getBody();
        Cart cart = cartService.findCartByUserId(existingUser.getId());


        return new ResponseEntity<>(cart, HttpStatus.OK);
    }

}
