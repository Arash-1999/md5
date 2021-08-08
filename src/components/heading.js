import styled from "@emotion/styled";

const Heading = styled.h2`
  font-size: 4vmax;
  font-weight: bold;
  line-height: 1.5;
  color: #212121;
  text-indent: 24px;
  @media screen and  (min-width: 740px) {
    font-size: 4vmin;
  }
  @media screen and  (min-width: 1440px) {
    font-size: 3.75vmin;
  }
`;

export default Heading;
