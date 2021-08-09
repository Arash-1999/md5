import React from "react";

import Text from "./../components/text.js";

const Binary = (props) => {

  return (
    <section>
      <Text>in first step the input string have to convert to binary form</Text>
      <Text>here is the binary form of "{props.value}"</Text>
      <Text code>{props.data.join(" ")}</Text>
    </section>
  );
};

export default Binary;
