import React from "react";
import { render, fireEvent, screen } from "@testing-library/react"; // highlight-line
import TodoList from './TodoList'
import TodoForm from '../TodoForm/TodoForm'
import Todo from '../Todo/Todo'


test("TodoList renders without crashing", () => {
  render(<TodoList />)
});

describe('To check form submission', () => {
  test("Form submission should go through successfully", () => {
    const addTodo = jest.fn() // highlight-line
    render(<TodoForm onSubmit={addTodo} />)
    const input = screen.getByPlaceholderText("Add a todo");
    const btn = screen.getByText(/Add todo/i);
    fireEvent.change(input, { target: { value: "test text" } });
    fireEvent.click(btn);
  });
});

describe('To check todo list', () => {
  const removeTodo = jest.fn()
  const updateTodo = jest.fn()
  render(<Todo removeTodo={removeTodo} updateTodo={updateTodo} />)
})

