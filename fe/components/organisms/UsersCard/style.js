import styled from "styled-components";

export const StyledCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  padding: 20px;
`;

export const StyledCard = styled.div`
  background-color: ${(props) => props.theme.palette.primary.white};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  width: 400px;
  background-image: linear-gradient(to bottom, #0e103d, #b6b8d6);
`;

export const StyledCardBody = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: center;
  color: ${(props) => props.theme.palette.primary.white};

  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  span {
    font-size: 1.2rem;
    font-weight: bold;
  }

  button {
    margin-top: 10px;
    color: ${(props) => props.theme.palette.primary.white};
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1.2rem;
    color: ${(props) => props.theme.palette.primary.black};
    cursor: pointer;
  }
`;

export const StyledUserCardText = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: ${(props) => props.theme.palette.primary.white};
  margin-top: 2rem;
  border-bottom: 4px solid ${(props) => props.theme.palette.primary.white};
  font-weight: bold;
  padding-bottom: 15px;
`;
