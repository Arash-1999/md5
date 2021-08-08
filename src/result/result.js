import React from "react";

const Result = (props) => {
  return (
    <section>
      <ul>
        {props.steps.map((item, idx) => {
          return typeof(item) === "number" ? 
            <li key={idx}>Block number {item}: </li> :
            <li key={idx}>A: {item[0]}, B: {item[1]}, C: {item[2]}, D: {item[3]}</li>
        })}
      </ul>
      <p>And the final result is: </p>
      <p>{props.hash}</p>
    </section>
  );
}

export default Result;
