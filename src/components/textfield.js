import styled from "@emotion/styled";

const Textfield = styled.textarea`
  padding: .5em;
  max-width: 100%;
  border-radius: .5em;
  outling: none;
  font-size: 1em;
  background: rgba(255, 255, 255, .6);
  margin: 1em 2em;
  
  &:hover {
    box-shadow: 5px 5px 5px rgba(0, 221, 154, .1),
      5px -5px 5px rgba(0, 221, 154, .1),
      -5px 5px 5px rgba(0, 221, 154, .1),
      -5px -5px 5px rgba(0, 221, 154, .1);
    border: 2px solid #00dd9a;
    background: rgba(255, 255, 255, .65);
  }
  &:focus {
    border: 2px solid #00dd9a;
    background: rgba(255, 255, 255, .7);
  }
`;

export default Textfield;
