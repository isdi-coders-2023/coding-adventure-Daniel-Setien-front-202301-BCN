import { useState } from "react";
import Button from "../Button/Button";
import RegisterFormStyled from "./RegisterFormStyled";

const RegisterForm = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState<File>();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <RegisterFormStyled>
      <form
        aria-label="register form"
        className="form"
        autoComplete="off"
        encType="multipart/form"
        onSubmit={handleSubmit}
      >
        <h2 className="form__heading">Register for the event</h2>

        <label className="form__text" htmlFor="email">
          Email
        </label>
        <input
          className="form__field"
          type="email"
          name="email"
          id="email"
          placeholder="Introduce your email"
          onChange={handleEmailChange}
          required
        ></input>

        <label className="form__text" htmlFor="password">
          Password
        </label>
        <input
          className="form__field"
          type="password"
          minLength={8}
          maxLength={32}
          name="password"
          id="password"
          placeholder="Introduce your password"
          onChange={handlePasswordChange}
          required
        ></input>

        <label className="form__text" htmlFor="image">
          Image
        </label>

        <input
          className="form__field"
          accept="image/*"
          type="file"
          name="image"
          id="image"
          onChange={handleImageChange}
        ></input>

        <Button text="Sign up" disabled={!email || !password || !image} />
      </form>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
