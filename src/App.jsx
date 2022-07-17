import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Features from "./components/Features";
import Highlights from "./components/Highlights";
function App() {
  return (
    <div>
      <section id="home">
        <Nav />
        <Header />
        <main>
        <Highlights />
        <Features />
        </main>
      </section>
    </div>
  );
}

export default App;
