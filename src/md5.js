import React, { useState } from "react";

import Form from "./form/form.js";

import Binary from "./binary/binary.js";
import Padded from "./padded/padded.js";
import Length from "./length/length.js";
import Buffer from "./buffer/buffer.js";
import Result from "./result/result.js";

import Btn from "./components/btn.js";

import { md5 } from "./hash-calculator/md5.js";

const Md5 = () => {
  const [input, setInput] = useState(""),
    [bin, setBin] = useState(false),
    [padded, setPadded] = useState({}),
    [fixedLength, setFixedLength] = useState(" "),
    [buffer, setBuffer] = useState(false),
    [result, setResult] = useState(false);


  // first step (submitting the form)
  const handleSubmit = (e) => {
    e.preventDefault();
    let newBin = [];

    for(let i = 0, len = input.length; i < len; i++) {
      newBin[i] = input.charCodeAt(i).toString(2).padStart(8, "0");
    }

    setBin(newBin);
    setPadded({});
    setFixedLength(" ");
    setBuffer(false);
    setResult(false);
  }

  // event listener for adding padding
  const step2 = () => {
    let result = {length: bin.join("").length}
    result.data = bin.join("");
    result.data += "1";
    while(result.data.length % 512 !== 448) {
      result.data += "0";
    }

    setPadded(result);
  }

  // event listener to appending length
  const step3 = () => {
    let fixed = padded.data,
      b = bin.join("").length.toString(2);

    if(b.length > 64) {
      fixed += b.slice(-32);
      fixed += b.slice(-64).slice(0, 32);
    }else{
      b = b.padStart(64, "0");
      fixed += b.slice(32);
      fixed += b.slice(0, 32);
    }

    setFixedLength(fixed);
  }

  // event listener for initializing buffer
  const step4 = () => {
    let newState = {};
    newState.A = "0x67452301 / 1100111010001010010001100000001";
    newState.B = "0xefcdab89 / 11101111110011011010101110001001";
    newState.C = "0x98badcfe / 10011000101110101101110011111110";
    newState.D = "0x10325476 / 10011000101110101101110011111110";

    setBuffer(newState);
  }

  // calculating md5 hash
  const step5 = () => {
    let hash = md5(input);

    setResult(hash);
  }

  return (
    <main>
      <Form
        value={input}
        handleChange={(e) => {setInput(e.target.value)}}
        handleSubmit={handleSubmit}/>
      {bin ? (
        <>
          <Binary data={bin} value={input} /> 
          <Btn role="button" onClick={step2} outline>Add Padding</Btn>
        </>
        ): null}
      {padded.length >= 0 ? (
        <>
          <Padded len={padded.length} data={padded.data} /> 
          <Btn role="button" onClick={step3} outline>Append Length</Btn>
        </>
        ): null}
      {fixedLength.length % 512 === 0 ? (
        <>
          <Length data={fixedLength} /> 
          <Btn role="button" onClick={step4} outline>Initialize Buffer</Btn>
        </>
        ): null}
      {buffer ? (
          <>
            <Buffer buffer={buffer} />
            <Btn role="button" onClick={step5} outline>Process</Btn>
          </>
        ): null}
      {result ? <Result hash={result.result} steps={result.procedure} /> : null}
    </main>
  );
}

export default Md5;
