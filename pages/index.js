import React from "react";
import { drizzleConnect } from "drizzle-react";

const index = props => {
  const { drizzleStatus, count } = props;
  if (!drizzleStatus.initialized) {
    return <div>...loading</div>;
  }
  return (
    <h1>
      <div>this is the index page</div>
      <div>{count}</div>
    </h1>
  );
};

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default drizzleConnect(index, mapStateToProps);
