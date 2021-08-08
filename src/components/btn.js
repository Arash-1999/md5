import styled from "@emotion/styled";

const Btn = styled.button`
  padding: .5em 1em;
  font-size: 1em;
  font-weight: bolder;
  border: none;
  border-radius: .5em;
  text-transform: uppercase;
  cursor: pointer;
  margin: 1em;
  transform: scale(.98);
  ${props => {
    return props.outline ? 
      `
        background: transparent;
        border: 3px solid #00dd9a;
        color: #00dd9a;

        &:hover {
          background: rgba(255, 255, 255, .2);
        }
      ` : `
        background: #00dd9a;
        color: white;
        &:hover {
          background: #00cc8e;
          border: 1px solid #00dd9a;
        }
      `;
  }}
  &:active {
    transform: scale(1);
  }
`;

export default Btn;
