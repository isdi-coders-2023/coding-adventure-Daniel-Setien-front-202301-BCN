import styled from "styled-components";

const RegisterFormStyled = styled.div`
  .form {
    display: flex;
    flex-direction: column;

    &__heading {
      font-family: var(--font-primary);
      color: var(--color-primary);
      font-size: 20px;
      font-weight: 400;
    }

    &__text {
      font-family: inherit;
      color: var(--font-color-primary);
      font-weight: 700;
      padding-bottom: 9px;
      font-size: 16px;
    }

    &__field {
      padding: 11px;
      max-width: 100%;
      margin-bottom: 40px;
      border-radius: 8px;
      min-height: 22px;
      background-color: var(--field-color-primary);
      font-size: 13px;
      vertical-align: middle;

      display: flex;
      justify-content: space-between;

      ::placeholder {
        color: #000;
      }
    }

    button:not(label > button) {
      margin-top: 30px;
      align-self: center;
    }
  }
`;

export default RegisterFormStyled;
