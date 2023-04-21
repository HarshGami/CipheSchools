import "./app.css";
import Header from "./components/header/header";
import About from "./components/about/about";
import Web from "./components/web/web";

function App() {
  return (
    <>
      <Header />
      <div className="information-container">
        <About />
        <div className="hr"></div>
        <Web/>
        <div className="hr"></div>
      </div>
    </>
  );
}

export default App;
