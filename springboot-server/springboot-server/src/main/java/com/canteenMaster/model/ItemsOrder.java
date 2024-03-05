package com.canteenMaster.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ItemsOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private  long id;

    @ManyToOne
    private User customer;

    @JsonIgnore
    @ManyToOne
    private Canteen canteen;

    private Long totalAmount;
    private String orderStatus;
    private Date createdAt;

    @OneToMany
    private List<OrderItem> items;
//    private Payment payment;
    private int totalItem;
    private int totalPrice;
}
