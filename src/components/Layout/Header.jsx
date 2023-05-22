import "./Header.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <>
      <header className="header">
        <h1>React-Eats</h1>
        <HeaderCartButton>Cart</HeaderCartButton>
      </header>
      <div className="main-image">
        <img src={mealsImage} alt="a table full of delicious food!"></img>
      </div>
    </>
  );
};

export default Header;
