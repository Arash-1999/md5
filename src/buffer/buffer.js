import React from "react";

const Buffer = (props) => {
  return (
    <section>
      <p>after processing the procedure of adding padding to input string start the main algorithm by initializin some words.</p>
      <p>A : {props.buffer.A}</p>
      <p>B : {props.buffer.B}</p>
      <p>C : {props.buffer.C}</p>
      <p>D : {props.buffer.D}</p>
      <p>also we define a <a href="https://en.wikipedia.org/wiki/MD5#Pseudocode">list</a> of number with sine function.</p>
      <button onClick={props.process} >Process</button>
    </section>
  );
};

export default Buffer;
