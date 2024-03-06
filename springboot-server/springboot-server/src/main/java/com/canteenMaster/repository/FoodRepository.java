package com.canteenMaster.repository;

import com.canteenMaster.model.Food;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface FoodRepository extends JpaRepository<Food,Long> {

    List<Food> findByCanteenId(Long canteenId);

    @Query("select f from Food f where f.name like %:keyword% or f.foodCategory.name like %:keyowrd%")
    List<Food>searchFood(@Param("keyword") String keyword);
}
