import React, { useEffect, useState } from "react";
import {
  Card,
  Divider,
  FormControl,
  FormControlLabel,
  MenuList,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
// import MenuItemcard from "./MenuItemCard";
import MenuItemCard from "./MenuItemCard";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCanteenById, getCanteenByUserId, getCanteenCategory } from "../State/Canteen/Action";
import { store } from "../State/Store";
import { getMenuItemByCanteenId } from "../State/Menu/Action";




const Canteen = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const {id,name} = useParams();
  const dispatch = useDispatch();
  // const {canteen,menu} = useSelector((store)=>store);

  const canteen = store.getState().canteen;
  const menu = store.getState().menu;
  console.log("canteen",canteen);
  console.log("menu",menu);
  useEffect(()=>{
    const reqData = { canteenId: id, foodCategory: '' };
    // console.log(id);
    const userEmail = sessionStorage.getItem("email");
    // console.log("localstorage email",email);
    dispatch(getCanteenById(id));
    dispatch(getCanteenCategory(userEmail));
    dispatch(getMenuItemByCanteenId({reqData}));
  },[]);

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);
    const reqData = { canteenId: id, foodCategory: selectedCategory };
    dispatch(getMenuItemByCanteenId({reqData}));
    // console.log("selected category: " + selectedCategory);
  };
  return (
    <div className="px-5 lg:px-20 pb-10">
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
          <h1 className="text-4xl py-1 font-semibold">{canteen.canteen?.name}</h1>
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
                  <FormControlLabel
                      key={0}
                      value="all"
                      control={<Radio />}
                      label="all"
                      sx={{ color: "gray" }}
                    />
                  {canteen.categories.map((item, index) => (
                    <FormControlLabel
                      key={index+1}
                      value={item.name}
                      control={<Radio />}
                      label={item.name}
                      sx={{ color: "gray" }}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
           
          </Card>
        </div>
        <div className="lg:w-[80%] space-y-5 lg:pl-10">
          {menu.menuItems.map((items) => (
            <MenuItemCard items={items} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Canteen;
