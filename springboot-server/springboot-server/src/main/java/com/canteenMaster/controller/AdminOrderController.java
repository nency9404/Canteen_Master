package com.canteenMaster.controller;

import com.canteenMaster.model.ItemsOrder;
import com.canteenMaster.service.OrderService;
import com.canteenMaster.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminOrderController {

    @Autowired
    private OrderService orderService;

    @Autowired
    private UserService userService;

    @GetMapping("/order/canteen/{id}")
    public ResponseEntity<List<ItemsOrder>> getOrderHistory(
            @PathVariable Long id,
            @RequestParam(required = false) String  order_status
    ) throws Exception {
        List<ItemsOrder> orders = orderService.getCanteenOrder(id,order_status);
        return new ResponseEntity<>(orders,HttpStatus.OK);
    }

    @PutMapping("/order/{id}/{orderStatus}")
    public ResponseEntity<ItemsOrder> updateOrderStatus(
            @PathVariable Long id,
            @PathVariable String orderStatus
    ) throws Exception {
        ItemsOrder orders = orderService.updateOrder(id, orderStatus);
        return new ResponseEntity<>(orders,HttpStatus.OK);
    }
}
