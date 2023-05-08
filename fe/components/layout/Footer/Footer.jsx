import React from "react";
import { StyledFooter } from "./style";
import ICONS from "../../../shared/icons";

const Footer = () => {
  return (
    <StyledFooter>
      <div>{ICONS.star}</div>
      This registration form is made for <span>codeAcademy</span>
      <div>{ICONS.star}</div>
    </StyledFooter>
  );
};

export default Footer;
