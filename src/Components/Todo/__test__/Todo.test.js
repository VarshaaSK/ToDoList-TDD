import { fireEvent, render, screen } from '@testing-library/react';
import Todo from '../Todo';
import { BrowserRouter } from 'react-router-dom';

const MockToDo = () => {
    return (
    <BrowserRouter>
        <Todo/>
    </BrowserRouter>
    )
}

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText("Enter your Task!");
    const buttonElement = screen.getByRole("button", {name : "Add Task"});
    tasks.forEach(element => {
        fireEvent.click(inputElement);
        fireEvent.change(inputElement, {target : {value : element}});
        fireEvent.click(buttonElement);
    });
}

test("Should check if one task is being displayed", () => {
    render(<MockToDo/>);
    addTask(["Task One"]);
    const taskOne = screen.getByText("Task One");
    expect(taskOne).toBeVisible();
})

test("Should check if the task is getting added" , () => {
    render(<MockToDo/>);
    addTask(["Task One" , "Task Two", "Task Three"]);
    const taskTab = screen.getAllByTestId("taskid");
    expect(taskTab.length).toBe(3);
})