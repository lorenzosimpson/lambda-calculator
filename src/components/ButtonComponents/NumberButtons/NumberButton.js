import React from "react";

const NumberButton = (props) => {
  console.log(props)
  return (
    <>
    <button>{props.numbers}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default NumberButton;