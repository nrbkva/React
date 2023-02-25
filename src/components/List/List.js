import React from "react";
import ToDoCard from "../TodoCard/ToDoCard";

const List = ({ list, handleDone }) => {
  return (
    <>
      {list.map((todo) => (
        <ToDoCard key={todo.id} todo={todo} handleDone={handleDone} />
      ))}
    </>
  );
};
// const List = ({ text, children }) => {
//   return (
//     <>
//       {List.map((todo, id) => (
//         <ToDoCard key={todo.id} todo={todo} />
//       ))}
//     </>
//   );
// };

export default List;

// function List(props) {
//   const doList = ["R", "G", "T"];
//   const { text, children } = props;
//   return (
//     <div className="{list}">
//       <div>
//         {doList.map((el) => (
//           <p>{el}</p>
//         ))}
//       </div>
//       {children}
//     </div>
//   );
// }
