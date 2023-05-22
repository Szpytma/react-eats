import "./Header.css";
import mealsImage from "../../assets/meals.jpg";

const Header = () => {
  return (
    <>
      <header className="header">
        <h1>React-Eats</h1>
        <button>Cart</button>
      </header>
      <div className="main-image">
        <img src={mealsImage} alt="a table full of delicious food!"></img>
      </div>
    </>
  );
};

export default Header;
