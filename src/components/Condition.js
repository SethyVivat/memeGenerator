import React from "react";

// conditional rendering part 1
function condition(props) {
  return props.isLoading ? (
    <p>Loading....</p>
  ) : (
    <p>My name is AyceX</p>
  );
  // if (props.isLoading) {
  //   return <p>Loading....</p>;
  // } else {
  //   return <p>My name is something</p>;
  // }
}
export default condition;
