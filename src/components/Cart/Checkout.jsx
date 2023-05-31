import { useRef } from "react";
import "./Checkout.css";

const Checkout = ({ onCancel }) => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current;
    const enteredStreet = streetInputRef.current;
    const enteredPostal = postalInputRef.current;
    const enteredCity = cityInputRef.current;
  };

  return (
    <form className="checkout-form" onSubmit={confirmHandler}>
      <div className="checkout-control">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
      </div>
      <div className="checkout-control">
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
      </div>
      <div className="checkout-control">
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
      </div>
      <div className="checkout-control">
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
      </div>
      <div className="checkout-actions">
        <button className="checkout-cancel" type="button" onClick={onCancel}>
          Cancel
        </button>
        <button className="checkout-submit">Confirm</button>
      </div>
    </form>
  );
};
export default Checkout;
