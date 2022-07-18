import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/home";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
          <section id="page">
            <Nav />
            <Route path="/" exact component={Home}/>
            <Footer />
          </section>
    </BrowserRouter>
  );
}

export default App;
