import React from "react";
import classes from "./todocard.module.css";
import Button from "../Button/Button";
import Delete from "../Delete/Delete";
// import Done from "../Done/Done";

const ToDoCard = ({ todo, handleDone }) => {
  return (
    <div className={classes.wrapperCard}>
      <div
        className={
          todo.completed ? [classes.todoCard, classes.done] : classes.todoCard
        }
      >
        <h3>{todo.title}</h3>
      </div>
      <Button onClick={handleDone} id={todo.id}>
        Done
      </Button>
      <Delete onClick={handleDelete} id={todo.id}>
        Delete
      </Delete>
    </div>
  );
};
export default ToDoCard;
