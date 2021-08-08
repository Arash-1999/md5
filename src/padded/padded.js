import React from "react";

const Padded = (props) => {
  return (
    <section>
      <p>at second step the length of binary form of input must been congruent 448, modulo 512.</p>
      <p>since the length of input is <code>{props.len}</code> we sould append one "1" and <code>{448 - 1 - (props.len % 512)}</code> zeroes to fix the padding.</p>
      <p>the final result shoud like this: </p>
      <p>{props.data}</p>
      <button onClick={props.init}>append length</button>
    </section>
  );
}

export default Padded;
