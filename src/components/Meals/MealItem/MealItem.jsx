import "./MealItem.css";

const MealItem = ({ name, description, price }) => {
  const cost = `£${price.toFixed(2)}`;
  return (
    <li className="meal">
      <div>
        <h3>{name}</h3>
        <div className="description">{description}</div>
        <div className="price">{cost}</div>
      </div>
      <div>{}</div>
    </li>
  );
};

export default MealItem;
