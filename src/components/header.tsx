import { Listbox, Transition } from "@headlessui/react";
import { useState } from "react";
import { TrFlagIcon } from "../assets/Tr-Flag-icon";
import { CategoryIcon } from "../assets/category-icon";
import { FacebookIcon } from "../assets/facebook-icon";
import { InstagramIcon } from "../assets/instagram-icon";
import { MailIcon } from "../assets/mail-icon";
import { NotificationIcon } from "../assets/notification-icon";
import { SearchIcon } from "../assets/search-icon";
import { ShoppingCartIcon } from "../assets/shoppingCart-icon";
import { TwitchIcon } from "../assets/twitch-icon";
import { WalletIcon } from "../assets/wallet-icon";

const people = [
  { id: 1, name: "Exxen", unavailable: false },
  { id: 2, name: "Albion", unavailable: false },
  { id: 3, name: "Rise Online", unavailable: false },
  { id: 4, name: "PUBG Mobile", unavailable: true },
  { id: 5, name: "Free Fire", unavailable: false },
  { id: 6, name: "LOL", unavailable: false },
  { id: 7, name: "Valorant", unavailable: false },
  { id: 8, name: "Knight Online", unavailable: false },
  { id: 9, name: "Metin 2", unavailable: false },
  { id: 10, name: "Zula", unavailable: false },
  { id: 11, name: "Fortnite", unavailable: false },
  { id: 12, name: "Goldbar", unavailable: false },
  { id: 13, name: "Steam", unavailable: false },
  { id: 14, name: "Xbox", unavailable: false },
  { id: 15, name: "Netflix", unavailable: false },
  { id: 16, name: "Spotify", unavailable: false },
];

export default function Header() {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  return (
    <header className="flex flex-col space-y-3 py-3">
      <div className="flex items-center justify-between">
        <div className="flex space-x-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#453F62]  ">
            <div className="h-4 w-4 ">
              <FacebookIcon />
            </div>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#453F62]  ">
            <div className="h-4 w-4">
              <InstagramIcon />
            </div>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#453F62]">
            <div className="h-4 w-4">
              <TwitchIcon />
            </div>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#453F62]  ">
            <div className="h-5 w-5 ">
              <ShoppingCartIcon />
            </div>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#453F62]  ">
            <div className="h-5 w-5">
              <MailIcon />
            </div>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#453F62]">
            <div className="h-5 w-5">
              <NotificationIcon />
            </div>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#453F62]">
            <div className="h-5 w-5">
              <TrFlagIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-1 justify-center  ">
        <div className="flex-1"></div>
        {/* input */}
        <div className="flex max-h-16 divide-x divide-slate-600 rounded-full bg-main-purple-dark px-5 py-5 shadow-main-input  ">
          <div className="flex items-center justify-center font-bold text-white">
            <div className="h-5 w-5">
              <CategoryIcon />
            </div>
            <div className="w-36 max-w-full whitespace-nowrap px-5  ">
              <Listbox value={selectedPerson} onChange={setSelectedPerson}>
                <Listbox.Button>{selectedPerson.name}</Listbox.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Listbox.Options>
                    {people.map((person) => (
                      <Listbox.Option
                        key={person.id}
                        value={person}
                        disabled={person.unavailable}
                      >
                        {person.name}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </Listbox>
            </div>
          </div>
          <div className="flex px-5">
            <input
              className="w-56 bg-transparent text-sm font-semibold text-white placeholder:text-main-text-smoke"
              type="text"
              placeholder="Kategori veya ürün arayın"
              name=""
              id=""
            />
            <div className=" right-0 h-6 w-6">
              <SearchIcon />
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-end gap-4">
          <div className="border-main-purple-light flex items-center gap-4 rounded-full border px-4 py-2">
            <div className="flex items-center rounded-full border border-main-purple">
              <div className="flex flex-1 flex-col text-right">
                <span className="text-sm font-bold text-lime-500">10,00 ₺</span>
                <span className="whitespace-nowrap text-xs text-white">
                  + Bakiye Yükle
                </span>
              </div>
              <div></div>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#453F62]">
              <div className="h-5 w-5 ">
                <WalletIcon />
              </div>
            </div>
          </div>
          <div className="border-main-purple-light flex items-center gap-2 rounded-full border px-4 py-2">
            <div className="bg-main-purple-light flex h-10 w-10 items-center justify-center rounded-full text-2xl text-white">
              <p>G</p>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-main-text-smoke">
                Merhaba
              </span>
              <span className="whitespace-nowrap text-xs font-extrabold text-white">
                Gökhan CAN
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
