package com.canteenMaster.service;

import com.canteenMaster.model.Category;

import java.util.List;

public interface CategoryService {

    public Category createCategory(String name, Long userId) throws Exception;

    public List<Category> findCategoryByCanteenId(Long id) throws Exception;

    public Category findCategoryById(Long id) throws Exception;
}
