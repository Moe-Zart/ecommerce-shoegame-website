import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shoes from "./pages/Shoes";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
          <section id="page">
            <Nav />
            <Route path="/" exact component={Home}/>
            <Route path="/shoes" exact component={Shoes}/>
            
            <Footer />
          </section>
    </BrowserRouter>
  );
}

export default App;
