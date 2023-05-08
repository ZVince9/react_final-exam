import styled from "styled-components";

export const StyledFooter = styled.nav`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: ${(props) => props.theme.palette.primary.white};
  font-size: 0.8rem;

  div {
    margin: 0 5px;
  }

  span {
    font-weight: bold;
    margin: 0 5px;
    font-size: 1rem;
  }
`;
