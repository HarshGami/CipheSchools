import "./app.css";
import Header from "./components/header/header";
import About from "./components/about/about";

function App() {
  return (
    <>
      <Header />
      <div className="information-container">
        <About />
        <div className="hr"></div>
      </div>
    </>
  );
}

export default App;
