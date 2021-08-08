import React from "react";

const Result = (props) => {
  return (
    <section>
      <ol>
        {props.steps.map((item, idx) => {
          return (
            <li key={idx}>A: {item[0]}, B: {item[1]}, C: {item[2]}, D: {item[3]}</li>
          );
        })}
      </ol>
      <p>And the final result is: </p>
      <p>{props.hash}</p>
    </section>
  );
}

export default Result;
