import React from "react";

import Text from "./../components/text.js";

const Length = (props) => {
  return (
    <section>
      <Text>now we should append 64-bit representation of length of original input, to get a string length that is multiple of 512.</Text>
      <Text>if the length of original input in binary form is less than 2^64 we should add zeroes to left of it to create 64-bit reperesentation.</Text>
      <Text>and if the length of original input in binary form is greater than 2^64 we should use modulo to 2^64 instead of length.</Text>
      <Text>finally we divide it to two 32-bit word and append them in reverse order. so the final string should be like this: </Text>
      <Text code>{props.data}</Text>
    </section>
  );
}

export default Length;
