import React, { Fragment } from "react";
import CartItem from "./CartItem";
import { Divider } from "@mui/material";

const cartItems = [1, 1, 1, 1];
export default function Cart() {
  return (
    <Fragment>
      <main className="lg:flex justify-around">
        <section className="lg:w-[30%] space-y-6 pt-10">
          <div className="space-y-6">
            {cartItems.map((item) => (
              <CartItem />
            ))}
          </div>
        </section>
        <Divider orientation="vertical" flexItem />
        <section className="lg:w-[30%] space-y-6 pt-10">
          <div className="billDetails px-5 text-sm">
            <p className="font-extralight py-5">Bill Details</p>

            <div className="space-y-3">
              <div className="flex justify-between text-gray-400">
                <p>Item Total</p>
                <p>₹343</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>Platform Fee</p>
                <p>₹343</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>GST and Restaurant Charges</p>
                <p>₹343</p>
              </div>
              <Divider/>

              <div className="flex justify-between text-gray-400">

                <p>Total Pay</p>
                <p>₹400</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
}
