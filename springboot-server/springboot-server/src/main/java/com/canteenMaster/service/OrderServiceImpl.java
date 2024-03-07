package com.canteenMaster.service;

import com.canteenMaster.model.*;
import com.canteenMaster.repository.CanteenRepository;
import com.canteenMaster.repository.OrderItemRepository;
import com.canteenMaster.repository.OrderRepository;
import com.canteenMaster.repository.UserRepository;
import com.canteenMaster.request.OrderRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class OrderServiceImpl implements OrderService{

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private OrderItemRepository orderItemRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CanteenService canteenService;

    @Autowired
    private CartService cartService;

    @Override
    public ItemsOrder createOrder(OrderRequest order, User user) throws Exception {
        Canteen canteen = canteenService.findCanteenById(order.getCanteenId());

        ItemsOrder createdOrder = new ItemsOrder();
        createdOrder.setCustomer(user);
        createdOrder.setCreatedAt(new Date());
        createdOrder.setOrderStatus("Pending");
        createdOrder.setCanteen(canteen);

        Cart cart = cartService.findCartByUserId(user.getId());
        List<OrderItem> orderItems = new ArrayList<>();

        for(CartItem cartItem : cart.getItem()){
            OrderItem orderItem = new OrderItem();
            orderItem.setFood(cartItem.getFood());
            orderItem.setQuantity(cartItem.getQuantity());
            orderItem.setTotalPrice(cartItem.getTotalPrice());

            OrderItem savedOrderItem = orderItemRepository.save(orderItem);
            orderItems.add(savedOrderItem);
        }

        Long totalPrice = cartService.calculateCartTotals(cart);

        createdOrder.setItems(orderItems);
        createdOrder.setTotalPrice(totalPrice);

        ItemsOrder savedOrder = orderRepository.save(createdOrder);
        canteen.getItemsOrders().add(savedOrder);
        return createdOrder;
    }

    @Override
    public ItemsOrder updateOrder(Long orderId, String orderStatus) throws Exception {
        ItemsOrder order = findOrderById(orderId);

        if(orderStatus.equals("Completed") || orderStatus.equals("Pending")){
            order.setOrderStatus(orderStatus);
            return orderRepository.save(order);
        }

        throw new Exception("Please select a valid order status");
    }

    @Override
    public void cancelOrder(Long orderId) throws Exception {
        ItemsOrder order = findOrderById(orderId);
        orderRepository.deleteById(orderId);
    }

    @Override
    public List<ItemsOrder> getUsersOrder(Long userId) throws Exception {
        return orderRepository.findByCustomerId(userId);
    }

    @Override
    public List<ItemsOrder> getCanteenOrder(Long canteenId, String orderStatus) throws Exception {
        List<ItemsOrder> orders = orderRepository.findByCanteenId(canteenId);
        if(orderStatus!=null){
            orders = orders.stream().filter(order->
                    order.getOrderStatus().equals(orderStatus)).collect(Collectors.toList());
        }

        return orders;
    }

    @Override
    public ItemsOrder findOrderById(Long orderId) throws Exception {
        Optional<ItemsOrder> optionalOrder = orderRepository.findById(orderId);
        if(optionalOrder.isEmpty()){
            throw new Exception("order not found");
        }

        return optionalOrder.get();
    }
}
