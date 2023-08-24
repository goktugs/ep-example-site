import React from "react";
import { ShoppingCartIcon } from "../assets/shoppingCart-icon";

export default function AdCard() {
  return (
    <div className="inline-flex flex-col space-y-8 rounded-2xl bg-main-purple-dark p-4">
      <div className="relative">
        <img
          className="h-64 w-72 rounded-2xl"
          src="https://placekitten.com/g/200/200"
          alt=""
        />
        <div className="absolute -bottom-3 flex w-full items-center justify-between px-4">
          <span className="bg-main-purple-light rounded-3xl px-6 py-2 text-xs text-white">
            1.000,00 TL
          </span>
          <span className="bg-main-purple-light rounded-xl p-2">
            <div className="h-5 w-5">
              <ShoppingCartIcon />
            </div>
          </span>
        </div>
      </div>
      <div className="relative flex flex-col">
        <span className="font-bold text-yellow-600">10500 RISE CASH</span>
        <span className="text-main-text-smoke ">
          5000 Cash + 200 Bonus Cash (%4 Bonusla birlikte)
        </span>
      </div>
    </div>
  );
}
