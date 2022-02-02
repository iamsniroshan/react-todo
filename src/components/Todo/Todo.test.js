import React from "react";
import { render, fireEvent,screen } from "@testing-library/react/pure";
import Todo from "./Todo";
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'


describe('To check component initialization', () => {
    test("Todo componet renders without crashing", () => {
        render(<Todo />);
    });
});