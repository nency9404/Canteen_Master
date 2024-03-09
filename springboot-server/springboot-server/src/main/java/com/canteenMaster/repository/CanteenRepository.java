package com.canteenMaster.repository;

import com.canteenMaster.model.Canteen;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CanteenRepository extends JpaRepository<Canteen, Long> {
    Canteen findByOwnerId(Long ownerId);
}
