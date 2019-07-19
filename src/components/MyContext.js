import React, { useState, useEffect } from "react";

export const MyContext = React.createContext();

export const MyProvider = props => {
  /*const MyInfo = {
    name: "ilyas",
    age: 94,
    cool: true
  };*/
  const todos1 = {
    todos: [
      { todo: "Make breakfast", done: false },
      { todo: "Go to bed", done: false },
      { todo: "Go to bed", done: false },
      { todo: "Go to bed", done: false },
      { todo: "Go to bed", done: false }
    ]
  };
  const [todos, setTodos] = useState(todos1.todos);

  const update = () => {
    console.log("Updated");
  };

  const handleSubmit = e => {
    const input = e.target.children[0].value;
    const newInput = { todo: input, done: false };

    if (input !== "") {
      todos.push(newInput);
      setTodos(todos);
    } else {
      alert("No task was entered");
    }

    e.preventDefault();
    e.target.reset();
    //e.reset();
  };

  const handleDone = (index, e) => {
    let todo = todos[index];
    todo.done = !todos[index].done;
    let newTodo = [...todos];
    setTodos(newTodo);
    if (todo.done === true) {
      e.target.parentElement.firstElementChild.style.textDecoration =
        "line-through";
      e.target.textContent = "Undone";
    } else {
      e.target.parentElement.firstElementChild.style.textDecoration = "none";
      e.target.textContent = "Done";
    }
  };

  const handleDelete = (index, e) => {
    const filteredTodos = todos.filter(todo => {
      return todos.indexOf(todo) !== index;
    });
    setTodos(filteredTodos);
  };

  //const [info, setInfo] = useState(MyInfo);

  return (
    <MyContext.Provider
      value={{
        state: todos,
        //fakeState: info,
        handleDone: handleDone,
        handleDelete: handleDelete,
        handleSubmit: handleSubmit,
        update: update

        /*growAYearOlder: () => {
          setInfo({ info, age: info.age + 1 });
        }*/
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};
