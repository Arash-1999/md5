import React from "react";
import styled from "@emotion/styled";

import Text from "./../components/text.js";
import Heading from "./../components/heading.js";

const HeaderContainer = styled.header`
  border-bottom: 4px solid #00dd9a;
  padding: 1em;
`;

const HeadText = styled(Text)`margin: 0 1em;`;

const Header = () => {
  return (
    <HeaderContainer>
      <Heading>MD5 Algorithm</Heading>
      <HeadText> demonstrating how message-degest algorithm works.</HeadText>
    </HeaderContainer>
  );
};

export default Header;
