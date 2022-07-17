import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Features from "./components/Features";
import Highlights from "./components/Highlights";
import LatestArrivals from "./components/LatestArrivals";
function App() {
  return (
    <div>
      <section id="home">
        <Nav />
        <Header />
        <main>
        <Highlights />
        <Features />
        <LatestArrivals />
        </main>
      </section>
    </div>
  );
}

export default App;
