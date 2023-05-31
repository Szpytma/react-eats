import "./Checkout.css";

const Checkout = ({ onCancel }) => {
  const confirmHandler = (e) => {
    e.preventDefault();
    console.log("sss");
  };

  return (
    <form onSubmit={confirmHandler}>
      <div className="control">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name"></input>
      </div>
      <div className="control">
        <label htmlFor="street">Street</label>
        <input type="text" id="street"></input>
      </div>
      <div className="control">
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal"></input>
      </div>
      <div className="city">
        <label htmlFor="postal">City</label>
        <input type="text" id="city"></input>
      </div>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
      <button>Confirm</button>
    </form>
  );
};
export default Checkout;