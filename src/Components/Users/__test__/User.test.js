import {render , screen} from "@testing-library/jest-dom";
import User from "../User";

jest.mock("../../../__mocks__/axios");

it("should be able to fech and render the users" , () => {
    render(<User/>);
    const userElement = screen.getAllByTestId("user-id");
    screen.debug();
    expect(userElement.length).toBe(1);
})