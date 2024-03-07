import React, { useState } from "react";
import {
  Card,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
// import MenuItemcard from "./MenuItemCard";
import MenuItemCard from "./MenuItemCard";


const categories = ["Thali", "Dessert", "Chineese", "Italian"];
const menu = [1, 1, 1, 1, 1, 1];
const Canteen = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const handleCategoryChange = () => {
    console.log("selected category: " + selectedCategory);
  };
  return (
    <div className="px-5 lg:px-20">
      <section>
        <h3 className="text-gray-500 py-2 mt-10">{`Home/Canteen 1/2`}</h3>
        <div>
          <img
            className="w-full h-[40vh] object-cover"
            src="https://img.freepik.com/premium-photo/set-american-breakfast-food-with-aesthetic-arrangement-top-view_744040-861.jpg"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-4xl py-1 font-semibold">{`Canteen 1`}</h1>
          <p className="py-3 text-orange-300">Open now 8.30am - 6pm (Today)</p>
        </div>
      </section>
      <Divider />

      <section className="pt-[2rem] lg:flex relative">
        <div className="space-y-10 lg:w-[20%]">
          <Card className="p-5 space-y-5 lg:sticky top-28">
            <div>
              <Typography sx={{ paddingBottom: "1rem" }} variant="h5">
                Category
              </Typography>
              <FormControl component={"fieldset"}>
                <RadioGroup
                  name="category"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  {categories.map((item, index) => (
                    <FormControlLabel
                      key={index}
                      value={item}
                      control={<Radio />}
                      label={item}
                      sx={{ color: "gray" }}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
           
          </Card>
        </div>
        <div className="lg:w-[80%] space-y-5 lg:pl-10">
          {menu.map((item) => (
            <MenuItemCard item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Canteen;
