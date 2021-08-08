import React from "react";

const Binary = (props) => {

  return (
    <section>
      <p>in first step the input string have to convert to binary form</p>
      <p>here is the binary form of "{props.value}"</p>
      <p>{props.data.join(" ")}</p>

      <button onClick={props.addPadding}>add padding</button>
    </section>
  );
};

export default Binary;
