import React, { useState, useEffect } from "react";

import "./List.scss";
import { MyContext } from "../../MyContext";

const List = () => {
  const todoList = (
    <MyContext.Consumer>
      {context => (
        <React.Fragment>
          {context.state.map((todo, index) => {
            return (
              <div className="list-item">
                <p key={index} id="todo">
                  {todo.todo}
                </p>
                <p
                  id="done"
                  onClick={e => {
                    context.handleDone(index, e);
                  }}
                >
                  Done
                </p>
                <p
                  id="delete"
                  onClick={e => {
                    context.handleDelete(index, e);
                  }}
                >
                  Delete
                </p>
              </div>
            );
          })}
        </React.Fragment>
      )}
    </MyContext.Consumer>
  );

  return <div className="list">{todoList}</div>;
};

export default List;
