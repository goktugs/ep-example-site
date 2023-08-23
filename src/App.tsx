import { FacebookIcon } from "./assets/facebook-icon"

function App() {

  return (
    <>
      <header className="flex flex-col" >
        <div className="flex justify-between items-center" >
          <div>
            <div className="w-8 h-8 rounded-full border border-[#453F62]" >
              <div className="w-4 h-4" >
                <FacebookIcon />
              </div>
            </div>
            <div className="w-8 h-8 rounded-full border border-[#453F62]" ></div>
            <div className="w-8 h-8 rounded-full border border-[#453F62]" ></div>
          </div>
        </div>
        <div className="flex flex-1" ></div>
      </header>
    </>
  )
}

export default App
