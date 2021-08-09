import React from "react";

import Text from "./../components/text.js";
import Code from "./../components/code.js";

const Padded = (props) => {
  return (
    <section>
      <Text>at second step the length of binary form of input must been congruent 448, modulo 512.</Text>
      <Text>since the length of input is <Code>{props.len}</Code> we sould append one "1" and <Code>{448 - 1 - (props.len % 512)}</Code> zeroes to fix the padding.</Text>
      <Text>the final result shoud like this: </Text>
      <Text code>{props.data}</Text>
    </section>
  );
}

export default Padded;
