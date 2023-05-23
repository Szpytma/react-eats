import MealItemForm from "./MealItemForm";
import "./MealItem.css";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const MealItem = ({ name, description, price, id }) => {
  const cartCtx = useContext(CartContext);
  const cost = `£${price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id,
      name,
      amount,
      price,
    });
  };
  return (
    <li className="meal">
      <div>
        <h3>{name}</h3>
        <div className="description">{description}</div>
        <div className="price">{cost}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
