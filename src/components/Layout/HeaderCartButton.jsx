import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";
import CartContext from "../../store/cart-context";
const HeaderCartButton = ({ onClick }) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((cur, item) => {
    return cur + item.amount;
  }, 0);
  return (
    <button className="button" onClick={onClick}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
