import MealItemForm from "./MealItemForm";
import "./MealItem.css";

const MealItem = ({ name, description, price, id }) => {
  const cost = `£${price.toFixed(2)}`;
  return (
    <li className="meal">
      <div>
        <h3>{name}</h3>
        <div className="description">{description}</div>
        <div className="price">{cost}</div>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
};

export default MealItem;
