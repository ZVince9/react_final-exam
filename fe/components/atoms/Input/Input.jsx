import { StyledInputWrapper, StyledIcon, StyledInput } from "./style";

const Input = (props) => {
  const { type, value, setValue, icon, placeholder, required, maxLength } =
    props;

  return (
    <StyledInputWrapper>
      {icon && <StyledIcon>{icon}</StyledIcon>}
      <StyledInput
        type={type || "text"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        required={required}
        maxLength={maxLength}
      />
    </StyledInputWrapper>
  );
};

export default Input;
