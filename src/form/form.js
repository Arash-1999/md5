import React from "react";


const Form = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <label>your string</label>
        <input type="text" placeholder=" " value={props.value} onChange={props.handleChange}/>
      </div>
      <button type="submit">Start</button>
    </form>
  );
};

export default Form;
