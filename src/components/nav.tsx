import React from "react";

export default function Nav() {
  return (
    <div>
      <ul className="my-4 flex justify-center space-x-12 whitespace-nowrap py-2 text-main-text-smoke ">
        <li>
          <a href="#">Tüm Kategoriler</a>
        </li>
        <li>
          <a href="#">Hediye Sistemi</a>
        </li>
        <li>
          <a href="#">Pubg Mobile</a>
        </li>
        <li>
          <a href="#">PVP Serverlar</a>
        </li>
        <li>
          <a href="#">Yayıncılar</a>
        </li>
        <li>
          <a href="#">Steam Oyunları</a>
        </li>
        <li>
          <a href="#">Oyuncu Pazarı</a>
        </li>
        <li>
          <a href="#">Ödeme Yöntemleri</a>
        </li>
        <li>
          <a href="#">Banka Hesapları</a>
        </li>
      </ul>
      <ul className="flex space-x-10">
        <li className="flex flex-col items-center space-y-1 text-white">
          <a
            className="block transform rounded-full bg-main-text-smoke p-1 transition hover:-rotate-6"
            href="#"
          >
            <img
              className="h-20 w-20 rounded-full"
              src="http://placekitten.com/g/200/200"
              alt=""
            />
          </a>
          <a href="">Exxen</a>
        </li>
        <li className="flex flex-col items-center space-y-1 text-white">
          <a
            className="block transform rounded-full bg-main-text-smoke p-1 transition hover:-rotate-6"
            href="#"
          >
            <img
              className="h-20 w-20 rounded-full"
              src="http://placekitten.com/g/200/201"
              alt=""
            />
          </a>
          <a href="">Exxen</a>
        </li>
      </ul>
    </div>
  );
}
