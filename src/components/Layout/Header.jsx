import "./Header.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = ({ onShowCart }) => {
  return (
    <>
      <header className="header">
        <h1>React-Eats</h1>
        <HeaderCartButton onClick={onShowCart}>Cart</HeaderCartButton>
      </header>
      <div className="main-image">
        <img src={mealsImage} alt="a table full of delicious food!"></img>
      </div>
    </>
  );
};

export default Header;
