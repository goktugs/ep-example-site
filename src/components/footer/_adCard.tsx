import { ShoppingCartIcon } from "../../assets/header/shoppingCart-icon";

export default function AdCard() {
  return (
    <div className="flex flex-col space-y-8 rounded-2xl bg-main-purple-dark p-4">
      <div className="relative">
        <img className="h-full w-full rounded-2xl" src="/adbanner.png" alt="" />
        <div className="absolute top-0 flex h-20 w-20 items-center justify-center  rounded-tl-2xl bg-gradient-to-br from-pink-600  text-2xl font-bold text-white ">
          %5
        </div>
        <div className="absolute -bottom-3 flex w-full items-center justify-between px-4">
          <span className="rounded-3xl bg-main-purple-light px-6 py-2 text-xs font-bold text-white ">
            1.000,00 TL
          </span>
          <button className="rounded-xl bg-main-purple-light p-2">
            <div className="h-5 w-5">
              <ShoppingCartIcon />
            </div>
          </button>
        </div>
      </div>
      <div className="relative flex flex-col">
        <span className="font-bold text-yellow-600">10500 RISE CASH</span>
        <span className="text-main-text-smoke ">
          5000 Cash + 200 Bonus Cash %4 Bonusla birlikte
        </span>
      </div>
    </div>
  );
}
