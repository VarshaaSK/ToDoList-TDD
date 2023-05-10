import { fireEvent, render, screen } from '@testing-library/react';
import AddingTest from '../AddingTest';

const mockSetToDo = jest.fn();

describe("Should check the Input Field", () => {
    test("sholud check if input field is present" , () => {
        render(<AddingTest todo = {[]} setToDo = {mockSetToDo}/>)
        const inputElement = screen.getByPlaceholderText("Enter your Task!");
        expect(inputElement).toBeVisible();
    })

    test("should check if input field is able to check the field", ()=> {
        render(<AddingTest todo = {[]} setToDo = {mockSetToDo}/>);
        const inputFiled = screen.getByPlaceholderText("Enter your Task!");
        fireEvent.click(inputFiled);
        fireEvent.click(inputFiled, {target : {value : "Task One"}});
        expect(inputFiled.value).toBe("Task One");
    })
})

describe("Should check the Button", () => {

    test("should check if button is present" , () => {
        render(<AddingTest todo = {[]} setToDo = {mockSetToDo}/>)
        const buttonElement = screen.getByRole("button" , {name : "Add Task"});
        expect(buttonElement).toBeVisible();
    })

    test("should add the input fild value on button click" , () =>{
        render(<AddingTest todo={[]} setToDo={mockSetToDo}/>)
        const inputField = screen.getByPlaceholderText("Enter your Task!");
        fireEvent.click(inputField);
        fireEvent.click(inputField, {target : {value : "Task One"}});
        const buttonElement = screen.getByRole("button" , {name : "Add Task"});
        fireEvent.click(buttonElement);
        expect(mockSetToDo).toBeCalled()
    })

    test("should check if we can clear the input field on Button click" , () => {
        render(<AddingTest todo = {[]} setToDo={mockSetToDo}/>)
        const inputField = screen.getByPlaceholderText("Enter your Task!");
        fireEvent.click(inputField);
        fireEvent.click(inputField, {target : {value : "Task One"}});
        const buttonElement = screen.getByRole("button" , {name : "Add Task"});
        fireEvent.click(buttonElement);
        expect(inputField.value).toBe("");
    })
})