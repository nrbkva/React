import classes from "./Button.module.css";

const Button = ({ title, children }) => {
  return <button className="button">{title}</button>;
};

export default Button;
