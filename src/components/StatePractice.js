import React, { Component } from "react";

// state practice 1
// class StatePractice extends Component {
//   constructor() {
//     super(); // use to call usability from the parent, " React.components"
//     this.state = {
//       name: "vivat",
//       age: "22"
//     };
//   }
//   render() {
//     return (
//       <div>
//         <h1>Hello World, My name is: {this.state.name}</h1>
//         <h1>I am : {this.state.age} years old now.</h1>
//       </div>
//     );
//   }
// }

// state practice 2
class StatePractice extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true
    };
  }

  render() {
    let temp;
    if (this.state.isLoggedIn) {
      temp = "in";
    } else {
      temp = "out";
    }

    return (
      <div>
        <h1>You are currently logged {temp}.</h1>
      </div>
    );
  }
}
export default StatePractice;
