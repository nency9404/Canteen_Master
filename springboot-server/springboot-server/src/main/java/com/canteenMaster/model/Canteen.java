package com.canteenMaster.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Canteen {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @OneToOne
    private User owner;

    private String name;

    @Embedded
    private ContactInformation contactInformation;

    private String openingHours;

    @OneToMany(mappedBy = "canteen",cascade = CascadeType.ALL,orphanRemoval = true)
    private List<ItemsOrder> itemsOrders = new ArrayList<>();

    @ElementCollection
    @Column(length = 1000)
    private List<String> images;

    private LocalDateTime registrationDate;
    private boolean open;
    private String cuisineType;

    @JsonIgnore
    @OneToMany(mappedBy = "canteen",cascade = CascadeType.ALL)
    private List<Food> foods = new ArrayList<>();
}
