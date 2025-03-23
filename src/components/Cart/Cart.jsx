import React, { Fragment } from "react";
import CartItem from "./CartItem";
import { Divider } from "@mui/material";
import { store } from "../State/Store";

// const cartItems = [1, 1, 1, 1];
export default function Cart() {
  const cart = store.getState().cart;

  console.log(cart);

  return (
    <Fragment>
      <main className="lg:flex justify-around">
        <section className="lg:w-[30%] space-y-6 pt-10">
          <div className="space-y-6">
            {cart.cart.item.map((item) => (
              <CartItem item={item} />
            ))}
          </div>
        </section>
        <Divider orientation="vertical" flexItem />
        <section className="lg:w-[30%] space-y-6 pt-10">
          <div className="billDetails px-5 text-sm">
            <p className="font-extralight py-5">Bill Details</p>

            {cart.cart.total ? (
              <div className="space-y-3">
                <div className="flex justify-between text-gray-400">
                  <p>Item Total</p>
                  <p>₹{cart.cart.total}</p>
                </div>
                <div className="flex justify-between text-gray-400">
                  <p>Platform Fee</p>
                  <p>₹21</p>
                </div>
                <div className="flex justify-between text-gray-400">
                  <p>GST and Restaurant Charges</p>
                  <p>₹33</p>
                </div>
                <Divider />

                <div className="flex justify-between text-gray-400">
                  <p>Total Pay</p>
                  <p>₹{cart.cart.total + 21 + 33}</p>
                </div>
              </div>
            ) : (
              <div>No Items</div>
            )}
          </div>
        </section>
      </main>
    </Fragment>
  );
}
