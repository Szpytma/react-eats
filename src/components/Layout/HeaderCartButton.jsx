import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";
import CartContext from "../../store/cart-context";
const HeaderCartButton = ({ onClick }) => {
  const [btnClicked, setButtonClicked] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((cur, item) => {
    return cur + item.amount;
  }, 0);

  const btnClasses = `button 
  ${btnClicked ? "bump" : ""}`;
  useEffect(() => {
    if (items.length === 0) return;
    setButtonClicked(true);
    const timer = setTimeout(() => {
      setButtonClicked(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={onClick}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
