import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsActive, setCartIsActive] = useState(false);

  const showCartHandler = () => {
    setCartIsActive(true);
  };
  const hideCartHandler = () => {
    setCartIsActive(false);
  };

  return (
    <CartProvider>
      {cartIsActive && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
