import React, { useState, useEffect } from "react";
import { StyledHeader, StyledHeaderText } from "./style";
import { TEXT } from "./text";

const Header = () => {
  const [text, setText] = useState(TEXT.firstText);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setText((prevText) =>
        prevText === TEXT.firstText ? TEXT.secondText : TEXT.thirdText
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <StyledHeader>
      <StyledHeaderText>{text}</StyledHeaderText>
    </StyledHeader>
  );
};

export default Header;
