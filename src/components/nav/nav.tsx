import { useState } from "react";
import { CategoryIcon } from "../../assets/nav/category-icon";
import { useTranslation } from "react-i18next";
const NAV_ELEMENTS_TOP = [
  {
    id: 1,
    name: "Tüm Kategoriler",
    logo: <CategoryIcon />,
  },
  {
    id: 2,
    name: "Hediye Sistemi",
  },
  {
    id: 3,
    name: "Pubg Mobile",
  },
  {
    id: 4,
    name: "PVP Serverlar",
  },
  {
    id: 5,
    name: "Yayıncılar",
  },
  {
    id: 6,
    name: "Steam Oyunları",
  },
  {
    id: 7,
    name: "Oyuncu Pazarı",
  },
  {
    id: 8,
    name: "Ödeme Yöntemleri",
  },
  {
    id: 9,
    name: "Banka Hesapları",
  },
];

const NAV_ELEMENTS_BOTTOM = [
  {
    id: 1,
    name: "Exxen",
  },
  {
    id: 2,
    name: "Albion",
  },
  {
    id: 3,
    name: "Rise Online",
  },
  {
    id: 4,
    name: "PUBG Mobile",
    discount: 50,
  },
  {
    id: 5,
    name: "Free Fire",
  },
  {
    id: 6,
    name: "League of Legends",
  },
  {
    id: 7,
    name: "Valorant",
  },
  {
    id: 8,
    name: "Knight Online",
    discount: 15,
  },
  {
    id: 9,
    name: "Metin 2",
  },
  {
    id: 10,
    name: "Zula",
  },
  {
    id: 11,
    name: "V-Papel",
  },
  {
    id: 12,
    name: "GOLDBAR",
  },
  {
    id: 13,
    name: "Steam",
  },
  {
    id: 14,
    name: "Xbox",
  },
  {
    id: 15,
    name: "Netflix",
  },
  {
    id: 16,
    name: "Spotify",
  },
];

export default function Nav() {
  const [selectedID, setSelectedID] = useState(1);

  const handleClick = (id: number) => {
    setSelectedID(id);
  };

  const { t } = useTranslation();

  const getSelectedClass = (id: number) =>
    selectedID === id
      ? "bg-main-purple-dark text-white "
      : "text-main-text-smoke";

  return (
    <div className="mb-5">
      <ul className="my-4 flex justify-center space-x-8 overflow-x-scroll py-2 text-main-text-smoke ">
        {NAV_ELEMENTS_TOP.map((element) => (
          <li
            key={element.id}
            onClick={() => handleClick(element.id)}
            className={`flex flex-1 cursor-pointer whitespace-nowrap rounded-full p-4 text-center text-sm font-semibold ${getSelectedClass(
              element.id,
            )}`}
          >
            {element.logo && (
              <div className="mr-2 flex h-6 w-6 items-center justify-center">
                {element.logo}
              </div>
            )}
            {t(element.name)}
          </li>
        ))}
      </ul>

      <div className="flex space-x-12 overflow-x-scroll pb-2 ">
        {NAV_ELEMENTS_BOTTOM.map((element) => (
          <div
            key={element.id}
            className="relative flex flex-col items-center space-y-1 text-white "
          >
            <a
              className="block transform rounded-full bg-main-text-smoke p-1 transition hover:-rotate-12"
              href="#"
            >
              <img
                className="h-20 w-20 rounded-full  "
                src={`http://placekitten.com/g/200/${200 + element.id}`}
                alt=""
              />
            </a>
            <a
              className="w-28 overflow-hidden text-ellipsis whitespace-nowrap text-center text-xs"
              href=""
            >
              {element.name}
            </a>
            {element.discount && (
              <div className="absolute top-0 h-10 w-20 rounded-tl-full  rounded-tr-full bg-gradient-to-b from-pink-600 text-center ">
                <span className="text-xs text-white">{element.discount}%</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
