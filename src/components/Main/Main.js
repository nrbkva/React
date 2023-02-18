import React from 'react';
import classes from "./Main.module.css"

const Main = (props) => {
  const {text} = props;
  return (
    <div>
      <p className="text">{text}</p>
    </div>
  );
}

export default Main;

