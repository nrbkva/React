import { useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import classes from "./todolist.module.css";
import Modal from "../../components/Modal/Modal";
import List from "../../components/List/List";
import Delete from "../../components/Delete/Delete";
import Done from "../../components/Done/Done";

const TodoList = () => {
  const [isShow, setIsShow] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [search, setSearch] = useState("");
  const [list, setList] = useState([
    {
      id: 1,
      title: "coding",
      completed: false,
    },
    {
      id: 2,
      title: "eat",
      completed: false,
    },
    {
      id: 3,
      title: "sleep",
      completed: false,
    },
  ]);

  const handleShow = () => setIsShow(!isShow);

  const handleAdd = () => {
    setList((prevTodo) => {
      return [
        ...prevTodo,
        { id: list.length + 1, title: newTitle, completed: false },
      ];
    });
    setNewTitle("");
    handleShow();
  };
  const handleDone = (id) => {
    const currentIndex = list.findIndex((todo) => todo.id === id);
    list[currentIndex].completed = !list[currentIndex].completed;
    setList([...list]);
  };
  const handleChangeText = (event) => {
    setNewTitle(event.target.value);
  };
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const handleDelete = (id) => {
    this.setState((prevState) => ({
      elements: prevState.elements.filter((el) => el.id != id),
    }));
  };

  // render() {
  //   const { elements } = this.state;

  //   return (
  //     <ul>
  //       {elements.map((el) => (
  //         <li
  //           key={el.id}
  //           onClick={() => {
  //             handleDelete(el.id);
  //           }}
  //         >
  //           {el.title}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // };

  // function Delete() {
  //   const [value, setValue] = useState("");

  //   const handleDelete = arr.map((element, index) => {
  //     return (
  //       <p key={index} onDoubleClick="{() => remove(index)}">
  //         {element}
  //       </p>
  //     );
  //   });

  //   function remove(index) {
  //     setArr([...arr.slice(0, index), ...arr.slice(index + 1)]);
  //   }
  //   return (
  //     <div>
  //       {result}
  //       <input
  //         value={value}
  //         onChange={(event) => setValue(event.target.value)}
  //       />
  //     </div>
  //   );
  // }

  return (
    <div className={classes.wrapper}>
      <Button onClick={handleShow}>Добавить</Button>
      <Input
        placeholder={"search..."}
        onChange={handleSearch}
        value={search}
        name={"search"}
      />
      {isShow && (
        <Modal handleShow={handleShow}>
          <p>{newTitle}</p>
          <Input
            placeholder={"Добавить"}
            onChange={handleChangeText}
            name={"add"}
            value={newTitle}
          />
          <Button onClick={handleAdd}>Добавить</Button>
          <button onClick={handleShow}>Close</button>
        </Modal>
      )}
      <List list={list} handleDone={handleDone} />
    </div>
  );
};

export default TodoList;
