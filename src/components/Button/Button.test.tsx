import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When rendered with the given text 'Sign up'", () => {
    test("It should show a button with the text 'Sign up'", () => {
      const buttonText = "Sign up";

      render(<Button text={buttonText} />);

      const button = screen.getByRole("button", {
        name: buttonText,
      });

      expect(button).toBeInTheDocument();
    });
  });
});
