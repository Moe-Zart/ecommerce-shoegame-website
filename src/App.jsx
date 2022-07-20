import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shoes from "./pages/Shoes";
import { BrowserRouter as Router, Route } from "react-router-dom";
import data from "./data";
import ShoeInfo from "./pages/ShoeInfo";
import Cart from "./pages/Cart";
function App() {
  const [cart, setCart] = useState([]);
  function addToCart(shoe) {
    const dupeItem = cart.find((item) => item.id === +shoe.id);
    if (dupeItem) {
      setCart(
        cart.map((item) => {
          if (item.id === dupeItem.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else {
            return item;
          }
        })
      );
    } else {
      setCart([...cart, { ...shoe, quantity: 1 }]);
    }
  }
  function changeQuantity(shoe, quantity) {
    setCart(
      cart.map((item) => {
        if (item.id === shoe.id) {
          return {
            ...item,
            quantity: +quantity,
          };
        } else {
          return item;
        }
      })
    );
  }

  function removeItem(item){
setCart(cart.filter(shoe=> shoe.id !== item.id))
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);
  return (
    <Router>
      <section id="page">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/shoes" exact render={() => <Shoes data={data} />} />
        <Route
          path="/shoes/:id"
          render={() => (
            <ShoeInfo data={data} addToCart={addToCart} cart={cart} />
          )}
        />
        <Route
          path="/cart"
          exact
          render={() => (
            <Cart
              key={data.id}
              data={data}
              cart={cart}
              changeQuantity={changeQuantity}
              removeItem={removeItem}
            />
          )}
        />
        <Footer />
      </section>
    </Router>
  );
}

export default App;
