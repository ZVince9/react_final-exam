import styled, { keyframes } from "styled-components";

const move = keyframes`
  0% {
    transform: translateX(4px);
  }
  50% {
    transform: translateX(-4px);
  }
  100% {
    transform: translateX(4px);
  }
`;

export const StyledHeader = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  padding: 0 20px;
  flex-wrap: wrap;
  gap: 0px;
  background-color: ${(props) => props.theme.palette.primary.white};
`;

export const StyledHeaderText = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  animation: ${move} 2s ease-in-out infinite;

  @media only screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;
