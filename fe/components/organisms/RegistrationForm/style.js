import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 400px;
  padding: 20px;
  background-color: #${(props) => props.theme.palette.primary.softBlue};
  background-image: linear-gradient(to top, #a5668b, #0e103d);

  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  gap: 1rem;
  margin-top: 2.5rem;
  font-size: 1.2rem;

  color: ${(props) => props.theme.palette.primary.white};
  cursor: pointer;

  .custom-datepicker {
    display: flex;
    align-items: center;
    border: 1px solid #d0d0d0;
    border-radius: 5px;
    background-color: ${(props) => props.theme.palette.primary.white};
    padding: calc(0.5em - 1px) calc(0.75em - 1px);
    width: 100%;

    outline: none;

    &:focus-within {
      border-color: #f2d7ee;
    }
  }
`;

export const StyledDataPicker = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledName = styled.div`
  max-width: 400px;
`;

export const StyledP = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const StyledTag = styled.p`
  display: flex;
  align-items: center;
  justify-content: left;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const StyledDataInputs = styled.input`
  outline: none;
  border: none;
  font-size: 1rem;
  line-height: 1.5;
  width: 100%;
  border-radius: 5px;
  padding: calc(0.5em - 1px) calc(0.75em + 1px);
  cursor: pointer;
  color: ${(props) => props.theme.palette.primary.grey};

  &:valid {
    color: ${(props) => props.theme.palette.primary.black};
  }

  &::-webkit-calendar-picker-indicator {
    filter: invert(80%);
  }
`;
