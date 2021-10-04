// button.test.js
import React from "react";
import renderer from "react-test-renderer";
import Button from "../index";

test("Test Button Component", () => {
  const component = renderer.create(<Button label="ClickMe" />);
  //let tree = component.toJSON();
  //expect(tree).toMatchSnapshot();
});
