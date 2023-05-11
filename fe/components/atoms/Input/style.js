import styled from "styled-components";

export const StyledInputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => props.theme.palette.primary.grey};
  border-radius: 5px;
  background-color: ${(props) => props.theme.palette.primary.white};
  padding: calc(0.5em - 1px) calc(0.75em - 1px);
  width: 100%;
`;

export const StyledIcon = styled.span`
  color: ${(props) => props.theme.palette.primary.grey};
`;

export const StyledInput = styled.input`
  outline: none;
  border: none;
  font-size: 1rem;
  line-height: 1.5;
  width: 100%;
  &::placeholder {
    color: ${(props) => props.theme.palette.primary.grey};
  }
`;
