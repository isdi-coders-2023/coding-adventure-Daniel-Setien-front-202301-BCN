import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  disabled: boolean;
}

const Button = ({ text, disabled }: ButtonProps): JSX.Element => {
  return <ButtonStyled disabled={disabled}>{text}</ButtonStyled>;
};

export default Button;
