package com.canteenMaster.service;

import com.canteenMaster.model.Canteen;
import com.canteenMaster.model.Category;
import com.canteenMaster.model.Food;
import com.canteenMaster.request.CreateFoodRequest;

import java.util.List;

public interface FoodService {
    public Food createFood(CreateFoodRequest req, Category category, Canteen canteen);

    void deleteFood(Long foodId) throws Exception;

    public List<Food> getCanteenFood(Long canteenId,String foodCategory);

    public List<Food> searchFood(String keyword);

    public Food findFoodById(Long foodId) throws Exception;

    public Food updateAvailabilityStatus(Long foodId) throws Exception;
}
