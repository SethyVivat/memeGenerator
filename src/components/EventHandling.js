import React from "react";
// event handling
function hiMe() {
  console.log("I was clicked!");
  alert("I was clicked");
}
function EventHandling() {
  return (
    <div>
      <h1>Hi new world</h1>
      <img onMouseOver={() => alert("this image is hoverd")} src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>
      {/* <button onClick={() => console.log("this was click")}>Click Me</button> */}
      <hr/>
      <p onSelect={() => alert("selected")}>Lorem ipsum new me hi gril chicken grill test tasty</p>
      <button onClick={hiMe}>Click Me</button>
    </div>
  );
}

export default EventHandling;
