import React from "react";

import { MyContext } from "../../MyContext";

import "./Form.scss";

const Form = () => {
  return (
    <MyContext.Consumer>
      {context => (
        <div className="add-todo">
          <p>This is where I keep my todos.</p>
          <form onSubmit={context.handleSubmit}>
            <input type="text" name="add-to" id="add-to" />
            <button type="submit">Add New Todo</button>
          </form>
        </div>
      )}
    </MyContext.Consumer>
  );
};

export default Form;
