package com.canteenMaster.service;

import com.canteenMaster.model.Canteen;
import com.canteenMaster.model.User;
import com.canteenMaster.request.CreateCanteenRequest;
import org.springframework.context.annotation.Bean;

import java.util.List;

public interface CanteenService {
    public Canteen createCanteen(CreateCanteenRequest req, User user);
    public Canteen updateCanteen(Long canteenId,CreateCanteenRequest updatedCanteen) throws Exception;

    public void deleteCanteen(Long canteenId) throws Exception;

    public List<Canteen> getAllCanteen();

    public Canteen findCanteenById(Long id) throws Exception;

    public Canteen getCanteenByUserId(Long userId) throws Exception;

    public Canteen updateCanteenStatus(Long id) throws Exception;
}
