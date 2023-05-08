import styled from "styled-components";

export const StyledRegistrationConent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 400px;
  padding: 20px;
  background-color: ${(props) => props.theme.palette.primary.softBlue};
  background-image: linear-gradient(to top, #0e103d, #a5668b);

  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  gap: 1rem;
  margin-top: 1rem;
  font-size: 1.2rem;
  color: ${(props) => props.theme.palette.primary.white};

  ul {
    list-style: none;
    text-align: left;
  }

  li {
    margin-bottom: 10px;
    transition: all 0.2s ease-in-out;
  }

  li:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;
