import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When rendered with the given text 'Sign up'", () => {
    test("It should show a button with the text 'Sign up'", () => {
      const givenButtonText = "Sign up";
      const expectedButtonText = "Sign up";

      render(<Button text={givenButtonText} />);

      const button = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(button).toBeInTheDocument();
    });
  });
});
