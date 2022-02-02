import React from "react";
import { render, fireEvent, screen } from "@testing-library/react/pure";
import TodoForm from "./TodoForm";
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

describe('To check component initialization', () => {
  test("AddTodo component renders without crashing", () => {
    render(<TodoForm />);
  });
});

describe('Test case for Todo Form', () => {
  test('Validate todo add btn', () => {
    const wrapper = shallow(<TodoForm />);
    const todoBtnAdd = wrapper.find('.tb-add');
    expect(todoBtnAdd).toHaveLength(1);
    expect(todoBtnAdd.text()).toEqual('Add todo');
  });
});

test("AddTodo contains input field and is focused on load", () => {
  const wrapper = shallow(<TodoForm />);
  const inputEle = wrapper.find('.todo-input');
  //expect(inputEle.text()).toHaveFocus();
});
