import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shoes from "./pages/Shoes";
import { BrowserRouter, Route } from "react-router-dom";
import  data  from "./data";
import ShoeInfo from "./pages/ShoeInfo";
function App() {
  return (
    <BrowserRouter>
      <section id="page">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/shoes" exact render={() => <Shoes data={data} />} />
        <Route path="/shoes/1" render={() => <ShoeInfo data={data} />} />
        <Footer />
      </section>
    </BrowserRouter>
  );
}

export default App;
