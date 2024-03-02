package com.canteenMaster.repository;

import com.canteenMaster.model.Canteen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CanteenRepository extends JpaRepository<Canteen,Long> {
    @Query("SELECT r FROM Canteen r WHERE lower(r.name) " +
            "LIKE lower(concat('%',:QUERY,'%') ) " +
            "OR lower(r.cuisineType) LIKE lower(concat('%',:query,'%') ) ")
    List<Canteen> findBySearchQuery(String query);
    Canteen findByOwnerid(Long userId);



}
