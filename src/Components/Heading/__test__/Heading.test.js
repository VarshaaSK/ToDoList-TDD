import { render, screen } from '@testing-library/react';
import Heading from '../Heading';

test("should have Heading ToDoList" , () => {
    render(<Heading/>);
    const headingElement = screen.getByRole("heading", {name : "To Do List"});
    expect(headingElement).toBeVisible();
})