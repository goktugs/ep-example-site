import { Listbox, Transition } from "@headlessui/react"
import { TrFlagIcon } from "./assets/Tr-Flag-icon"
import { FacebookIcon } from "./assets/facebook-icon"
import { InstagramIcon } from "./assets/instagram-icon"
import { MailIcon } from "./assets/mail-icon"
import { NotificationIcon } from "./assets/notification-icon"
import { ShoppingCartIcon } from "./assets/shoppingCart-icon"
import { TwitchIcon } from "./assets/twitch-icon"
import { useState } from "react"
import { CategoryIcon } from "./assets/category-icon"

const people = [
  { id: 1, name: 'Exxen', unavailable: false },
  { id: 2, name: 'Albion', unavailable: false },
  { id: 3, name: 'Rise Online', unavailable: false },
  { id: 4, name: 'PUBG Mobile', unavailable: true },
  { id: 5, name: 'Free Fire', unavailable: false },
  { id: 6, name: 'LOL', unavailable: false },
  { id: 7, name: 'Valorant', unavailable: false },
  { id: 8, name: 'Knight Online', unavailable: false },
  { id: 9, name: 'Metin 2', unavailable: false },
  { id: 10, name: 'Zula', unavailable: false },
  { id: 11, name: 'Fortnite', unavailable: false },
  { id: 12, name: 'Goldbar', unavailable: false },
  { id: 13, name: 'Steam', unavailable: false },
  { id: 14, name: 'Xbox', unavailable: false },
  { id: 15, name: 'Netflix', unavailable: false },
  { id: 16, name: 'Spotify', unavailable: false },
]



function App() {
  const [selectedPerson, setSelectedPerson] = useState(people[0])


  return (
    <>
      <header className="flex flex-col py-3 space-y-3" >
        <div className="flex justify-between items-center" >
          <div className="flex space-x-3"  >
            <div className="w-8 h-8 rounded-full border border-[#453F62] flex items-center justify-center  " >
              <div className="w-4 h-4 " >
                <FacebookIcon />
              </div>
            </div>
            <div className="w-8 h-8 rounded-full border border-[#453F62] flex items-center justify-center  " >
              <div className="w-4 h-4" >
                <InstagramIcon />
              </div>
            </div>
            <div className="w-8 h-8 rounded-full border border-[#453F62] flex items-center justify-center" >
              <div className="w-4 h-4" >
                <TwitchIcon />
              </div>
            </div>
          </div>
          <div className="flex space-x-4"  >
            <div className="w-8 h-8 rounded-full border border-[#453F62] flex items-center justify-center  " >
              <div className="w-5 h-5 " >
                <ShoppingCartIcon />
              </div>
            </div>
            <div className="w-8 h-8 rounded-full border border-[#453F62] flex items-center justify-center  " >
              <div className="w-5 h-5" >

                <MailIcon />
              </div>
            </div>
            <div className="w-8 h-8 rounded-full border border-[#453F62] flex items-center justify-center" >
              <div className="w-5 h-5" >

                <NotificationIcon />
              </div>
            </div>
            <div className="w-8 h-8 rounded-full border border-[#453F62] flex items-center justify-center" >
              <div className="w-5 h-5" >

                <TrFlagIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 w-full justify-center">
          <div className="flex h-16 divide-x divide-slate-600 rounded-3xl bg-main-purple-dark py-5 px-4" >
            <div className="text-white font-bold flex justify-center items-center" >
              <div className="w-5 h-5" >
                <CategoryIcon />
              </div>
              <div className="px-5 w-40 max-w-full " >
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
            <div className="pl-5" >
              <input type="text" name="" id="" />
            </div>

          </div>
        </div>
      </header>
    </>
  )
}

export default App
