import React from "react";
import Footer from "./MemeGenerator"
import Header from "./Header";
// fetching data from an API
// class Fetching extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       loading: false,
//       character: {}
//     };
//   }
//   componentDidMount() {
//     this.setState({ loading: true });
//     fetch("https://swapi.co/api/people/1/")
//       .then(response => response.json())
//       .then(data => {
//         this.setState({
//           loading: false,
//           character: data
//         });
//       });
//   }
//   render() {
//     // return <h1>{this.state.character.name}</h1>;
//     return this.state.loading ? (
//       <h1>Loading...</h1>
//     ) : (
//       <h1>{this.state.character.name}</h1>
//     );
//   }
// }

class Fetching extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      character: {}
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://swapi.co/api/people/1/")
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          character: data
        });
      });
  }
  render() {
     return(
         <div>
             <Header />
             {this.state.loading ? <p>Loading...</p> : <p>{this.state.character.name}</p>}
             <Footer />
         </div>
     ) 
     
  }
}
export default Fetching;
