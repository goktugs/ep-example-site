import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Nav from "./components/nav/nav";

function App() {
  return (
    <div className="container mx-auto font-inter">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
