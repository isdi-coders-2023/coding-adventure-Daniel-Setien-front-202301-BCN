import styled from "styled-components";

const ButtonStyled = styled.button`
  cursor: pointer;
  width: 100%;
  height: 40px;
  background-color: var(--color-primary);
  font-weight: 400;
  font-family: var(--font-primary);
  font-size: 1.2rem;
  border: none;
  border-radius: 10px;

  :disabled {
    opacity: 0.57;
  }

  @media (min-width: 370px) {
    width: 320px;
    height: 55px;
  }
`;

export default ButtonStyled;
