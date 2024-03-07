package com.canteenMaster.service;

import com.canteenMaster.model.Cart;
import com.canteenMaster.model.CartItem;
import com.canteenMaster.request.AddCartItemRequest;

public interface CartService {

    public CartItem addCartItem(AddCartItemRequest req,String email) throws Exception;

    public CartItem updateItemQuantity(Long cartItemId, int quantity) throws Exception;

    public Cart removeItemFromCart(Long cartItemId, String email) throws Exception;

    public Long calculateCartTotals(Cart cart) throws Exception;

    public Cart findCartById(Long id) throws Exception;

    public Cart findCartByUserId(Long userId) throws Exception;

    public Cart clearCart(Long userId) throws Exception;
}
