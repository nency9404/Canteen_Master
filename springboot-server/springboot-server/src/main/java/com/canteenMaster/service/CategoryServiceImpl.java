package com.canteenMaster.service;

import com.canteenMaster.model.Canteen;
import com.canteenMaster.model.Category;
import com.canteenMaster.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryServiceImpl implements CategoryService{

    @Autowired
    private CanteenService canteenService;

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public Category createCategory(String name, Long userId) throws Exception {
        Canteen canteen = canteenService.getCanteenByUserId(userId);
        Category category = new Category();
        category.setName(name);
        category.setCanteen(canteen);

        return categoryRepository.save(category);
    }

    @Override
    public List<Category> findCategoryByCanteenId(Long id) throws Exception {

        Canteen canteen =canteenService.getCanteenByUserId(id);
        return categoryRepository.findByCanteenId(canteen.getId());
    }

    @Override
    public Category findCategoryById(Long id) throws Exception {
        Optional<Category> optionalCategory = categoryRepository.findById(id);

        if(optionalCategory.isEmpty()){
            throw new Exception("Category not found");
        }

        return optionalCategory.get();
    }
}
