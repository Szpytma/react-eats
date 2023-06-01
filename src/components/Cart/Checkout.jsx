import { useRef, useState } from "react";
import "./Checkout.css";

const regexp =
  /^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/;

const isEmpty = (value) => value.trim() === "";
// const isNotFiveChars = (value) => value.match(regexp).length === 5;
const isUKPostCode = (value) => value.match(regexp);

const Checkout = ({ onCancel, onConfirm }) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalIsValid = isUKPostCode(enteredPostal);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalIsValid,
    });
    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }

    onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostal,
    });
  };
  const nameControlStyle = `checkout-control ${
    formInputValidity.name ? "" : "checkout-invalid"
  }`;
  const streetControlStyle = `checkout-control ${
    formInputValidity.street ? "" : "checkout-invalid"
  }`;
  const cityControlStyle = `checkout-control ${
    formInputValidity.city ? "" : "checkout-invalid"
  }`;
  const postalCodeControlStyle = `checkout-control ${
    formInputValidity.postalCode ? "" : "checkout-invalid"
  }`;
  return (
    <form className="checkout-form" onSubmit={confirmHandler}>
      <div className={nameControlStyle}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetControlStyle}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputValidity.street && <p>Please enter a valid Street!</p>}
      </div>
      <div className={postalCodeControlStyle}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formInputValidity.postalCode && (
          <p>Please enter a valid UK Postal Code!</p>
        )}
      </div>
      <div className={cityControlStyle}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValidity.city && <p>Please enter a valid City!</p>}
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
