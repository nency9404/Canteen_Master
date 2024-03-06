package com.canteenMaster.service;

import com.canteenMaster.model.Canteen;
import com.canteenMaster.model.Category;
import com.canteenMaster.model.Food;
import com.canteenMaster.repository.FoodRepository;
import com.canteenMaster.request.CreateFoodRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class FoodServiceImpl implements FoodService {

    @Autowired
    private FoodRepository foodRepository;

    @Override
    public Food createFood(CreateFoodRequest req, Category category, Canteen canteen) {

        Food food = new Food();
        food.setFoodCategory(category);
        food.setCanteen(canteen);
        food.setImages(req.getImages());
        food.setName(req.getName());
        food.setPrice(req.getPrice());

        Food savedfood = foodRepository.save(food);
        canteen.getFoods().add(savedfood);
        return savedfood;
    }

    @Override
    public void deleteFood(Long foodId) throws Exception {
        Food food = findFoodById(foodId);
        food.setCanteen(null);
        foodRepository.save(food);
    }

    @Override
    public List<Food> getCanteenFood(Long canteenId, String foodCategory) {
        List<Food> foods = foodRepository.findByCanteenId(canteenId);

        if(foodCategory!=null& !foodCategory.equals("")){
            foods = filterByCategory(foods,foodCategory);
        }

        return foods;
    }

    private List<Food> filterByCategory(List<Food> foods, String foodCategory) {
        return foods.stream().filter(food -> {
            if(food.getFoodCategory()!=null){
                return food.getFoodCategory().getName().equals(foodCategory);
            }
            return false;
        }).collect(Collectors.toList());
    }

    @Override
    public List<Food> searchFood(String keyword) {
        return foodRepository.searchFood(keyword);
    }

    @Override
    public Food findFoodById(Long foodId) throws Exception {
        Optional<Food> optionalFood = foodRepository.findById(foodId);

        if(optionalFood.isEmpty()){
            throw new Exception("Food not exist...");
        }

        return optionalFood.get();
    }

    @Override
    public Food updateAvailabilityStatus(Long foodId) throws Exception {
        Food food = findFoodById(foodId);
        food.setAvailable(food.isAvailable());

        return foodRepository.save(food);
    }
}
