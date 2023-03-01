import Button from "../Button/Button";
import RegisterFormStyled from "./RegisterFormStyled";

const RegisterForm = (): JSX.Element => {
  return (
    <RegisterFormStyled>
      <form
        aria-label="register form"
        className="form"
        autoComplete="off"
        encType="multipart/form"
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
        ></input>

        <Button text="Sign up" />
      </form>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
