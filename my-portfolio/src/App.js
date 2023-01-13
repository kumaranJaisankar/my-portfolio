import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe/about";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <header className="App-header"></header>
        <div className="home-card">
          <Home />
        </div>
        <AboutMe />
      </div>
      <Footer />
    </>
  );
}

export default App;
