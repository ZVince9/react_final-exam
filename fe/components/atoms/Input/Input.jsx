import { StyledInputWrapper, StyledIcon, StyledInput } from "./style";

const Input = (props) => {
  const {
    type,
    value,
    setValue,
    icon,
    placeholder,
    required,
    maxLength,
    marginLeft,
  } = props;

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
        style={{ marginLeft: marginLeft }}
      />
    </StyledInputWrapper>
  );
};

export default Input;
