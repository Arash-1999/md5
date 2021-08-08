import React from "react";

import Text from "./../components/text.js";
import Btn from "./../components/btn.js";

const Binary = (props) => {

  return (
    <section>
      <Text>in first step the input string have to convert to binary form</Text>
      <Text>here is the binary form of "{props.value}"</Text>
      <Text code>{props.data.join(" ")}</Text>

      <Btn outline onClick={props.addPadding}>add padding</Btn>
    </section>
  );
};

export default Binary;
