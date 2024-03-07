package com.canteenMaster.repository;

import com.canteenMaster.model.ItemsOrder;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<ItemsOrder,Long> {

    public List<ItemsOrder> findByCustomerId(Long userId);

    public List<ItemsOrder> findByCanteenId(Long canteenId);
}
