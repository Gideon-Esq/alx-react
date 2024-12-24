/* in task_3/dashboard/src/App.test.js create four tests:

test that App renders without crashing
verify that App renders a div with the class App-header
verify that App renders a div with the class App-body
verify that App renders a div with the class App-footer*/

import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render a div with the class App-header", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App-header").exists()).toBe(true);
  });

  it("should render a div with the class App-body", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App-body").exists()).toBe(true);
  });

  it("should render a div with the class App-footer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App-footer").exists()).toBe(true);
  });
});
