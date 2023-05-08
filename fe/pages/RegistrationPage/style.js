import styled from "styled-components";

export const StyledRegistrationPageWrapper = styled.div`
  padding-bottom: 100px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  width: 80%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.palette.primary.darkBlue};

  border-radius: 10px;

  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;

export const StyledRegistrationImages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1500px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const StyledRegistrationContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (min-width: 1500px) {
    flex-direction: row;
    align-items: center;

    & > :nth-child(1) {
      order: 5 !important;
    }

    & > :nth-child(2) {
      order: 4 !important;
    }

    & > :nth-child(3) {
      order: 3 !important;
    }

    & > :nth-child(4) {
      order: 2 !important;
    }

    & > :nth-child(5) {
      order: 1 !important;
    }
  }

  & > :nth-child(1) {
    order: 1;
  }

  & > :nth-child(2) {
    order: 3;
  }

  & > :nth-child(3) {
    order: 5;
  }

  & > :nth-child(4) {
    order: 4;
  }

  & > :nth-child(5) {
    order: 2;
  }
`;

export const StyledMainContainer = styled.div`
  background-color: ${(props) => props.theme.palette.primary.white};
`;
