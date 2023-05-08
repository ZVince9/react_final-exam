import { StyledButton } from "./style";

const Button = ({ text, width, action, disabled }) => {
  return (
    <StyledButton onClick={action} width={width} disabled={disabled}>
      {text}
    </StyledButton>
  );
};

export default Button;
