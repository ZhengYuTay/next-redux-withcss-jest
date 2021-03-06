import { mount } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import App from "./index.js";

describe("With Enzyme", () => {
  it('App shows "O Hai world!"', () => {
    const app = mount(<App />);
    expect(app.find(".example").text()).toEqual("O Hai world!");
  });
});

describe("With Snapshot Testing", () => {
  it('App rendered!"', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
