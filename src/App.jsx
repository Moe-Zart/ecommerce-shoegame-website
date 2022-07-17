import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Features from "./components/Features";
import Highlights from "./components/Highlights";
import LatestArrivals from "./components/LatestArrivals";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
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
        <Explore />
        </main>
        <Footer />
      </section>
    </div>
  );
}

export default App;
