import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { CategoryIcon } from "../../assets/nav/category-icon";
import { SearchIcon } from "../../assets/search-icon";
import { useTranslation } from "react-i18next";

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

export default function Input() {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  const { t } = useTranslation();

  return (
    <div className="flex max-h-16 divide-x divide-slate-600 rounded-full bg-main-purple-dark px-5 py-5 shadow-main-input  ">
      <div className="flex items-center justify-center font-bold text-white">
        <div className="h-5 w-5">
          <CategoryIcon />
        </div>
        <div className="w-36 max-w-full whitespace-nowrap px-5  ">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center rounded-md bg-transparent bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                {selectedPerson.name}
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-10 z-50 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-main-purple-dark bg-opacity-70 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  {people.map((person) => (
                    <Menu.Item key={person.id}>
                      {({ active }) => (
                        <a
                          onClick={() => {
                            setSelectedPerson(person);
                          }}
                          href="#"
                          className={`${
                            active ? "bg-violet-500 text-white" : "text-white"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          {person.name}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      <div className="flex px-5">
        <input
          className="w-56 bg-transparent text-sm font-semibold text-white placeholder:text-main-text-smoke"
          type="text"
          placeholder={t("Kategori Veya Ürün Arayın")}
          name=""
          id=""
        />
        <div className=" right-0 h-6 w-6">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
}
