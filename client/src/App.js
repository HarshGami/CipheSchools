import "./app.css";
import Header from "./components/header/header";
import About from "./components/about/about";
import Web from "./components/web/web";
import Map from "./components/map/map";
import Professional from "./components/professional/professional";
import Password from "./components/password/password";
import Interest from "./components/interest/interest";

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
        <Professional/>
        <div className="hr"></div>
        <Password/>
        <div className="hr"></div>
        <Interest/>
      </div>
    </>
  );
}

export default App;
