import React from "react";
import styled from "@emotion/styled";

import Text from "./../components/text.js";
import Code from "./../components/code.js";

const List = styled.ul`
  margin: 0 2em;
  list-style: none;
`;

const ListItem = Text.withComponent("li")
const Output= styled(Code)`
  font-size: 1.4em;
  padding: .5em 1em;
  margin: 0 2em;
`;


const Result = (props) => {
  return (
    <section>
      <List>
        {props.steps.map((item, idx) => {
          return typeof(item) === "number" ? 
            <ListItem key={idx}>Block number {item}: </ListItem> :
            <ListItem code key={idx}>A: {item[0]}, B: {item[1]}, C: {item[2]}, D: {item[3]}</ListItem>
        })}
      </List>
      <Text>And the final result is: </Text>
      <Output>{props.hash}</Output>
    </section>
  );
}

export default Result;
