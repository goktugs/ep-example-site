import AdCard from "./components/adCard";
import Header from "./components/header";
import Main from "./components/main";
import Nav from "./components/nav";

function App() {
  return (
    <div className="font-inter container mx-auto">
      <Header />
      <Nav />
      <Main />
      {/* <AdCard /> */}
    </div>
  );
}

export default App;
