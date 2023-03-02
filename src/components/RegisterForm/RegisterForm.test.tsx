import { render, screen } from "@testing-library/react";
import RegisterForm from "./RegisterForm";

describe("Given a RegisterForm component", () => {
  describe("When rendered", () => {
    test("Then it shoud show a 'Register for the event' title", () => {
      const expectedTitle = "Register for the event";

      render(<RegisterForm />);

      const formTitle = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(formTitle).toBeInTheDocument();
    });

    test("Then it should show an 'Email' text", () => {
      const emailLabelText = "Email";

      render(<RegisterForm />);

      const emailLabel = screen.getByLabelText(emailLabelText);

      expect(emailLabel).toBeInTheDocument();
    });

    test("Then it should show a 'Password' text", () => {
      const passwordLabelText = "Password";

      render(<RegisterForm />);

      const passwordLabel = screen.getByLabelText(passwordLabelText);

      expect(passwordLabel).toBeInTheDocument();
    });

    test("Then it should show an 'Image' text", () => {
      const imageLabelText = "Image";

      render(<RegisterForm />);

      const imageLabel = screen.getByLabelText(imageLabelText);

      expect(imageLabel).toBeInTheDocument();
    });

    test("It should show a button with the text 'Sign up'", () => {
      const buttonText = "Sign up";

      render(<RegisterForm />);

      const button = screen.getByRole("button", {
        name: buttonText,
      });

      expect(button).toBeInTheDocument();
    });
  });
});
