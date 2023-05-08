import styled from "styled-components";

export const StyledButton = styled.button`
  width: ${(props) => props.width || "100%"};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  border-width: 1px;
  border-style: solid;
  border-radius: 0.375em;
  outline: none;
  padding: calc(0.5em + 4px) 1em;
  font-size: 1.1rem;

  cursor: pointer;

  :hover {
    background-color: ${(props) =>
      props.children.toLowerCase() === "confirm"
        ? props.theme.palette.primary.red
        : props.children.toLowerCase() === "edit"
        ? props.theme.palette.primary.softBlue
        : props.children.toLowerCase() === "delete"
        ? props.theme.palette.primary.softBlue
        : props.children.toLowerCase() === "cancel"
        ? props.theme.palette.primary.softBlue
        : props.theme.palette.primary.pink};
    color: ${(props) => props.theme.palette.primary.white};
  }
`;
