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
        required
      ></input>

      <label className="form__label" htmlFor="username">
        Username
      </label>
      <input
        className="form__input"
        type="text"
        minLength={6}
        maxLength={24}
        name="username"
        id="username"
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
        id="image"
      ></input>
    </form>
  );
};

export default RegisterForm;
