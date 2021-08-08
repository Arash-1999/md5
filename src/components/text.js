import styled from "@emotion/styled";

const Text = styled.p`
  font-size: 2.5vmax;
  font-weight: bold;
  line-height: 1.5;
  margin: 0 0 24px;
  ${props => {
    return props.color ?
      "color: " + props.color + ";" : "color: #323232;";
  }}
  ${props => {
    return props.code ? 
      `word-break: break-all;
       background: rgba(255, 255, 255, .2);
       padding: .5em 1em;
       margin-left: 24px;
       border-left: 3px solid #00dd9a;
     ` : "text-indent: 24px;";
  }}
  @media screen and  (min-width: 740px) {
    font-size: 2.5vmin;
  }
  @media screen and  (min-width: 1440px) {
    font-size: 2.25vmin;
  }
`;

export default Text;
