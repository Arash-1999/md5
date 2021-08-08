import React from "react";

const Length = (props) => {
  return (
    <section>
      <p>now we should append 64-bit representation of length of original input, to get a string length that is multiple of 512.</p>
      <p>if the length of original input in binary form is less than 2^64 we should add zeroes to left of it to create 64-bit reperesentation.</p>
      <p>and if the length of original input in binary form is greater than 2^64 we should use modulo to 2^64 instead of length.</p>
      <p>finally we divide it to two 32-bit word and append them in reverse order. so the final string should be like this: </p>
      <p>{props.data}</p>
      <button onClick={props.init} >initialize buffer</button>
    </section>
  );
}

export default Length;
