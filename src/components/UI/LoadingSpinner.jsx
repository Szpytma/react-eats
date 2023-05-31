import { FaSpinner } from "react-icons/fa";
import "./LoadingSpinner.css";
function LoadingSpinner() {
  return (
    <div className="LoadingSpinner">
      <p>Loading</p>
      <FaSpinner className="LoadingSpinner-icon" />
    </div>
  );
}
export default LoadingSpinner;
