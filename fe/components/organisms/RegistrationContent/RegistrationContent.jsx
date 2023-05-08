import React from "react";
import { StyledRegistrationConent } from "./style";

const RegistrationContent = (props) => {
  const { title, content } = props;
  return (
    <StyledRegistrationConent>
      <h3>{title}</h3>
      <ul>
        {content.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </StyledRegistrationConent>
  );
};

export default RegistrationContent;
