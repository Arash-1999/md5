import React from "react";
import styled from "@emotion/styled";

import Textfield from "./../components/textfield.js";
import Btn from "./../components/btn.js";
import Text from "./../components/text.js";


const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Label_p = styled(Text)`margin: 0;`;
const Label = Label_p.withComponent("label");

const Form = (props) => {

  return (
    <FormContainer onSubmit={props.handleSubmit}>
        <Label htmlFor="input" >your string: </Label>
        <Textfield id="input" rows="10" cols="80" placeholder=" " value={props.value} onChange={props.handleChange}/>
      <Btn role="button" type="submit">Start</Btn>
    </FormContainer>
  );
};

export default Form;
