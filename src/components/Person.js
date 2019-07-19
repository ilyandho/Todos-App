import React from "react";

import { MyContext } from "./MyContext";

const Person = () => {
  return (
    <MyContext.Consumer>
      {context => (
        <React.Fragment>
          <h1>{context.fakeState.name} </h1>
          <h1>{context.fakeState.age} </h1>
          <h1>{context.fakeState.cool} </h1>
          <button onClick={context.growAYearOlder}>&cake;</button>
        </React.Fragment>
      )}
    </MyContext.Consumer>
  );
};

export default Person;
