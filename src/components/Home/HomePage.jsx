import React, { useEffect } from "react";
import "../../style/HomePage.css";
import MultipleItemCarousel from "./MultipleItemCarousel";
import { canteens } from "../../data/canteens";
import CanteenCard from "./CanteenCard";
import { Auth } from "../Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { getAllCanteensAction } from "../State/Canteen/Action";
import { store } from "../State/Store";
import { findCart } from "../State/Cart/Action";

export default function HomePage() {
  const dispatch = useDispatch();
  const email = sessionStorage.getItem("email");
  const allCanteens = store.getState().canteen;
  // const {allCanteens} = useSelector((store)=>store);


  // console.log(allCanteens);

  useEffect(() => {
    dispatch(getAllCanteensAction());
    if (email) {
      dispatch(findCart(email));
    }
  }, [email]);
  return (
    <div>
      <section className="-z-50 banner relative flex flex-col justify-center items-center">
        <div className="w-[50vw] z-10 text-center">
          <p className="text-2xl lg:text-7xl font-bold z-10 py-5">
            CanteenMaster
          </p>
          <p className="z-10 text-gray-300 text-xl lg:text-4xl">
            Fueling your day, one bite at a time.
          </p>
        </div>
        <div className="cover absolute top-0 left-0 right-0"></div>
        <div className="fadeout"></div>
      </section>

      <section className="p-10 lg:px-20">
        <div>
          <p className="text-2xl font-semibold text-gray-400 py-3 pb-10">
            Top Meals
          </p>
        </div>
        <MultipleItemCarousel />
      </section>
      <section className="p-5 lg:px-20">
        <div>
          <h1 className="text-2xl font-semibold text-gray-400 py-3">
            Explore Our Menu
          </h1>
          <div className="flex flex-wrap items-center justify-around">
            {allCanteens.canteens.map((item, index) => (
              <CanteenCard item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
