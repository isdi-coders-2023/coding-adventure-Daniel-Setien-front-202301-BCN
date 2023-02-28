import Button from "../Button/Button";

const RegisterForm = (): JSX.Element => {
  return (
    <form
      aria-label="register form"
      className="form"
      autoComplete="off"
      encType="multipart/form"
    >
      <label className="form__label" htmlFor="email">
        Email
      </label>
      <input
        className="form__input"
        type="email"
        name="email"
        id="email"
        placeholder="Introduce your email"
        required
      ></input>

      <label className="form__label" htmlFor="password">
        Password
      </label>
      <input
        className="form__input"
        type="password"
        minLength={8}
        maxLength={32}
        name="password"
        id="password"
        placeholder="Introduce your password"
        required
      ></input>

      <label className="form__label" htmlFor="image">
        image
      </label>
      <input
        className="form__input"
        accept="image/*"
        type="file"
        name="image"
        placeholder="Introduce an image for your profile"
        id="image"
      ></input>

      <Button text="Sign up" />
    </form>
  );
};

export default RegisterForm;
