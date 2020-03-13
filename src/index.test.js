import React from "react";
import ReactDOM from "react-dom";
import Comp from ".";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Comp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
