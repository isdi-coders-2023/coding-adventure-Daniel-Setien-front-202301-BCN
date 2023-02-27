interface ButtonProps {
  text: string;
  ariaLabel: string;
  className: string;
  action: () => void;
}

const Button = ({ text }: ButtonProps): JSX.Element => {
  return <button>{text}</button>;
};

export default Button;
