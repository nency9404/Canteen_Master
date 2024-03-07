package com.canteenMaster.service;

import com.canteenMaster.model.ItemsOrder;
import com.canteenMaster.model.OrderItem;
import com.canteenMaster.model.User;
import com.canteenMaster.request.OrderRequest;

import java.util.List;

public interface OrderService {

    public ItemsOrder createOrder(OrderRequest order, User user) throws Exception;

    public ItemsOrder updateOrder(Long orderId,String orderStatus) throws Exception;

    public void cancelOrder(Long orderId) throws Exception;

    public List<ItemsOrder> getUsersOrder(Long userId) throws Exception;

    public List<ItemsOrder> getCanteenOrder(Long canteenId,String orderStatus) throws Exception;

    public ItemsOrder findOrderById(Long orderId) throws Exception;
}
