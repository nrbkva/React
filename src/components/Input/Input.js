import { useState } from "react";

const Input = ({ placeholder, onChange, value, name }) => {
  const [isShow, setIsShow] = useState(false);
  const [newTask, setNewTask] = useState("Search");
  return (
    <input
      className={".input"}
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
