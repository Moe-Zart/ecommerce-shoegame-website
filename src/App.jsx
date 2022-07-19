import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shoes from "./pages/Shoes";
import { BrowserRouter, Route } from "react-router-dom";
import  data  from "./data";
function App() {
  return (
    <BrowserRouter>
      <section id="page">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/shoes" render={() => <Shoes data={data} />} />

        <Footer />
      </section>
    </BrowserRouter>
  );
}

export default App;
