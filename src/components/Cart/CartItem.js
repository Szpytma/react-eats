import "./CartItem.css";

const CartItem = ({ price, name, amount, onRemove, onAdd }) => {
  const cost = `£${price.toFixed(2)}`;

  return (
    <li className="cart-item">
      <div>
        <h2>{name}</h2>
        <div className="item-summary">
          <span className="price">{cost}</span>
          <span className="amount">x {amount}</span>
        </div>
      </div>
      <div className="item-actions">
        <button onClick={onRemove}>-</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
