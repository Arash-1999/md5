import styled from "@emotion/styled";

const Link = styled.a`
  font-size: 1.2em;
  text-decoration: none;
  font-weight: bold;
  color: #22ffbc;
  transiton: .1s;

  &:hover {
    border-bottom: 3px solid #00dd9a;
  }
  &:visited {
    color: #00dd9a;
  }
`;

export default Link;
