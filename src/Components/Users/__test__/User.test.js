import {render , screen} from "@testing-library/react";
import User from "../User";

jest.mock("../../../__mocks__/axios");

it("should be able to fech and render the users" , async () => {
    render(<User/>);
    const userElement = await screen.findAllByTestId("user-id");
    screen.debug();
    expect(userElement.length).toBe(1);
})