import React from "react";

import Text from "./../components/text.js";
import Link from "./../components/link.js";
import Btn from "./../components/btn.js";

const Buffer = (props) => {
  return (
    <section>
      <Text>after processing the procedure of adding padding to input string start the main algorithm by initializin some words.</Text>
      <Text code>A : {props.buffer.A}</Text>
      <Text code>B : {props.buffer.B}</Text>
      <Text code>C : {props.buffer.C}</Text>
      <Text code>D : {props.buffer.D}</Text>
      <Text>also we define a <Link href="https://en.wikipedia.org/wiki/MD5#Pseudocode">list</Link> of number with sine function.</Text>
      <Btn outline onClick={props.process} >Process</Btn>
    </section>
  );
};

export default Buffer;
