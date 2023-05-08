import React from "react";
import { StyledRegistrationBox } from "./style";

const RegistrationImage = (props) => {
  const { imageSrc, imageAlt } = props;
  return (
    <StyledRegistrationBox>
      <img src={imageSrc} alt={imageAlt} />
    </StyledRegistrationBox>
  );
};

export default RegistrationImage;
