import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Header />
          <div className="home-card">
            <h1 className="welcome">Welcome</h1>
            <Home />
          </div>
        </header>
      </div>
      <Footer />
    </>
  );
}

export default App;
