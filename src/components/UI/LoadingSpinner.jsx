import { FaSpinner } from "react-icons/fa";
import "./LoadingSpinner.css";
function LoadingSpinner({ msg }) {
  return (
    <div className="LoadingSpinner">
      <p>{msg}</p>
      <FaSpinner className="LoadingSpinner-icon" />
    </div>
  );
}
export default LoadingSpinner;
