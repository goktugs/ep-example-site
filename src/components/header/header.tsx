import { useTranslation } from "react-i18next";
import { TrFlagIcon } from "../../assets/header/Tr-Flag-icon";
import { FacebookIcon } from "../../assets/header/facebook-icon";
import { InstagramIcon } from "../../assets/header/instagram-icon";
import { MailIcon } from "../../assets/header/mail-icon";
import { NotificationIcon } from "../../assets/header/notification-icon";
import { ShoppingCartIcon } from "../../assets/header/shoppingCart-icon";
import { TwitchIcon } from "../../assets/twitch-icon";
import { WalletIcon } from "../../assets/wallet-icon";
import Input from "./_input";
import { UsFlagIcon } from "../../assets/header/Us-Flag-icon";

export default function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = async (lng: string) => {
    await i18n.changeLanguage(lng);
  };

  return (
    <header className="flex flex-col space-y-3 py-3">
      <div className="flex items-center justify-between">
        <div className="flex space-x-3">
          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-[#453F62]  ">
            <div className="h-4 w-4 ">
              <FacebookIcon />
            </div>
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-[#453F62]  ">
            <div className="h-4 w-4">
              <InstagramIcon />
            </div>
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-[#453F62]">
            <div className="h-4 w-4">
              <TwitchIcon />
            </div>
          </button>
        </div>
        <div className="flex space-x-4">
          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-[#453F62]  ">
            <div className="h-5 w-5 ">
              <ShoppingCartIcon />
            </div>
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-[#453F62]  ">
            <div className="h-5 w-5">
              <MailIcon />
            </div>
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-[#453F62]">
            <div className="h-5 w-5">
              <NotificationIcon />
            </div>
          </button>
          <button
            onClick={
              i18n.language === "tr"
                ? () => changeLanguage("en")
                : () => changeLanguage("tr")
            }
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#453F62]"
          >
            <div className="h-5 w-5">
              {i18n.language === "tr" ? <TrFlagIcon /> : <UsFlagIcon />}
            </div>
          </button>
        </div>
      </div>
      <div className="flex w-full flex-1 justify-center  ">
        <div className="flex-1"></div>
        <Input />
        <div className="flex flex-1 justify-end gap-4">
          <div className="flex items-center gap-4 rounded-full border border-main-purple-light px-4 py-2">
            <div className="flex items-center rounded-full border border-main-purple">
              <div className="flex flex-1 flex-col text-right">
                <span className="text-sm font-bold text-lime-500">10,00 ₺</span>
                <span className="whitespace-nowrap text-xs text-white">
                  + {t("Bakiye Yükle")}
                </span>
              </div>
              <div></div>
            </div>
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[#453F62]">
              <div className="h-5 w-5 ">
                <WalletIcon />
              </div>
            </button>
          </div>
          <button className="flex items-center gap-2 rounded-full border border-main-purple-light px-4 py-2 text-left">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-main-purple-light text-2xl text-white">
              <p>G</p>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-main-text-smoke">
                {t("Merhaba")}
              </span>
              <span className="whitespace-nowrap text-xs font-extrabold text-white">
                Gökhan CAN
              </span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
