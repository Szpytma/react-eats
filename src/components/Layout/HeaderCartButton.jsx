import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";
const HeaderCartButton = ({ onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      <span className="icon">
        {" "}
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">1</span>
    </button>
  );
};

export default HeaderCartButton;
