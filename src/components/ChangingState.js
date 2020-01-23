// import React from "react";
// class ChangingState extends React.Component {
//   this is also a methode
//     constructor() {
//     super();
//     this.state = {
//       count: 1
//     };
//     this.handleClick = this.handleClick.bind(this)
//     this.resetClick = this.resetClick.bind(this)
//   }

//   methode or class methode
//   handleClick() {
//       this.setState(prevState =>{
//           return {
//               count: prevState.count * 2
//           }
//       })
//   }

//   resetClick() {
//     this.setState(originalState => {
//       alert(originalState.count)

//     })
//   }

//   another methode
//   render() {
//     return (
//       <div>
//         <h1 style={{textAlign: "center"}}>{this.state.count}</h1>
//         <button style={{margin: "auto", display: "block"}} onClick={this.handleClick}>Click Me!</button>
//         <hr/>
//         <button style={{margin: "auto", display: "block"}} onClick={this.resetClick}>Reset</button>
//       </div>
//     );
//   }
// }
// export default ChangingState;

import React from "react";
class ChangingState extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };

    this.clickMe = this.clickMe.bind(this);
    this.Reset = this.Reset.bind(this);
  }

  clickMe() {
    this.setState(originalCount => {
      // alert(originalCount.count);
      return{
        count: originalCount.count + 1
      }
    });
  }

  Reset() {
    this.setState(toOriginal => {
      // alert(toOriginal.count);
      return {
        count: toOriginal.count * 0
      }
    });
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>{this.state.count}</h1>
        <button style={{ margin: "auto", display: "block" }} onClick={this.clickMe}>
          plus
        </button>
        <hr />
        <button style={{ margin: "auto", display: "block" }} onClick={this.Reset}>
          Reset
        </button>
      </div>
    );
  }
}
export default ChangingState;
