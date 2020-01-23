import React from "react";
import Condition from "./Condition";

// conditonal rendering part 1
// class CondRender extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoading: true
//     };
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({
//         isLoading: false
//       });
//     }, 2000);
//   }

//   render() {
//     return (
//       <div>
//         <h1>HI</h1>
//         <Condition isLoading={this.state.isLoading} />
//         <h1>contact me here.!</h1>
//       </div>
//     );
//   }
// }
// export default CondRender;

// conditional rendering part 2
// class CondRender extends React.Component {
//   // constructor() {
//   //   super();
//   //   this.state = {
//   //     unReadMessages: ["a", "b"],
//   //     isLoading: true
//   //   };
//   // }

//   // componentDidMount() {
//   //   setTimeout(() => {
//   //     this.setState({
//   //       isLoading: false
//   //     });
//   //   }, 1500);
//   // }

//   // render() {
//   //   // if (this.state.unReadMessages.length > 0) {
//   //   //   return <h1>You have {this.state.unReadMessages.length} messages</h1>;
//   //   // } else {
//   //   //   return null;
//   //   // }

//   //   // this is the practice leng leng
//   //   // if (this.state.isLoading) {
//   //   //   return <h1>Loading...</h1>;
//   //   // } else {
//   //   //   return this.state.unReadMessages.length > 0 ? (
//   //   //     <h1>You have {this.state.unReadMessages.length} messages.</h1>
//   //   //   ) : null;
//   //   // }
//   // }
// }
// export default CondRender;

class CondRender extends React.Component {
  constructor() {
    super();
    this.state = {
      userState: true
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState(prevState => {
      return {
        userState: !prevState.userState
      };
    });
  }

  render() {
    let buttonText = this.state.userState ? "LOG IN" : "LOG OUT"
    let text = this.state.userState ? "OUT" : "IN"
    return (
      <div>
        <h1>You are logged {text}</h1>
    <button onClick={this.handleChange}>{buttonText}</button>
      </div>
    );
  }
}

export default CondRender;
