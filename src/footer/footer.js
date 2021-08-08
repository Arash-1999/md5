import React from "react";
import styled from "@emotion/styled";

import Link from "./../components/link.js";
import Text from "./../components/text.js";

const Ftext = styled(Text)`
  margin: 0;
`;
const FooterContainer = styled.footer`
  border-top: 4px solid #00dd9a;
  margin-top: 2vh;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Ftext>developed by <Link href="https://arash-1999.github.io">spry_ps</Link></Ftext>
      <Ftext>for more information and details of implemenation you can view <Link href="https://datatracker.ietf.org/doc/html/rfc1321">rfc 1321</Link></Ftext>
    </FooterContainer>
  );
};

export default Footer;
