package com.canteenMaster.request;

import com.canteenMaster.model.Category;
import lombok.Data;

import java.util.List;

@Data
public class CreateFoodRequest {
    private String name;
    private Long price;
    private Category category;
    private List<String> images;
    private Long canteenId;
}
