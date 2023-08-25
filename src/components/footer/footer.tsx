import { useState } from "react";
import { AdIcon } from "../../assets/footer/ad-icon";
import { NewIcon } from "../../assets/footer/new-icon";
import { PopularIcon } from "../../assets/footer/popular-icon";
import { MostSaleIcon } from "../../assets/footer/mostSale-icon";
import React from "react";
import PaginationAd from "./_pagination";
import { useTranslation } from "react-i18next";

const FOOTER_BUTTONS = [
  {
    id: 1,
    text: "Yeni",
    icon: <NewIcon selected={false} />,
    isSelected: true,
  },
  {
    id: 2,
    text: "Çok Satan",
    icon: <MostSaleIcon selected={false} />,
    isSelected: false,
  },
  {
    id: 3,
    text: "Popüler",
    icon: <PopularIcon selected={false} />,
    isSelected: false,
  },
];

export default function Footer() {
  const [selectedButton, setSelectedButton] = useState(FOOTER_BUTTONS[0]);

  const handleButtonSelect = (button: (typeof FOOTER_BUTTONS)[number]) => {
    setSelectedButton(button);
  };

  const { t } = useTranslation();

  return (
    <footer className=" mb-8 flex flex-col">
      <div className="my-9 flex justify-between">
        <div className="flex items-center gap-4">
          <div className="p-2">
            <AdIcon />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-main-text-smoke">
              1200 {t("İlan")}{" "}
            </span>
            <span className="flex-1 text-3xl font-extrabold text-white ">
              Rise Online World
            </span>
          </div>
        </div>
        <div className="flex space-x-4">
          {FOOTER_BUTTONS.map((button) => (
            <button
              key={button.id}
              className={`flex flex-col items-center justify-center gap-1 rounded-2xl  px-6 py-2 ${
                selectedButton.id === button.id ? "bg-main-purple-dark" : ""
              } `}
              onClick={() => handleButtonSelect(button)}
            >
              <div className="h-6 w-6">
                {React.cloneElement(button.icon, {
                  selected: selectedButton.id === button.id,
                })}
              </div>
              <span
                className={`text-sm font-bold  ${
                  selectedButton.id === button.id
                    ? "text-[#EAB74B]"
                    : "text-main-text-smoke"
                }`}
              >
                {t(`${button.text}`)}
              </span>
            </button>
          ))}
        </div>
      </div>

      <PaginationAd />
    </footer>
  );
}
