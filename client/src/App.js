import "./app.css";
import Header from "./components/header/header";
import About from "./components/about/about";
import Web from "./components/web/web";
import Map from "./components/map/map";

function App() {
  return (
    <>
      <Header />
      <div className="information-container">
        <About />
        <div className="hr"></div>
        <Map />
        <div className="hr"></div>
        <Web />
        <div className="hr"></div>
      </div>
    </>
  );
}

export default App;
