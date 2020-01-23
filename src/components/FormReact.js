import React from "react";
class FormReact extends React.Component {
  // Form part 1
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: false,
      gender: "",
      Favorite: "blue"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({
          [name]: value
        });
  }

  render() {
    return (
      <form style={{ marginLeft: 20 }}>
        <input
          type="text"
          value={this.state.firstName}
          name="firstName"
          placeholder="first name"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          value={this.state.lastName}
          name="lastName"
          placeholder="last name"
          onChange={this.handleChange}
        />
        <br />
        {/* Text Area */}
        <textarea value="some default value" onChange={this.handleChange} />
        <br />
        {/* checkBox */}
        <label>Is Friendly</label>
        <input
          name="isFriendly"
          type="checkbox"
          checked={this.state.isFriendly}
          onChange={this.handleChange}
        />
        <br />
        {/* radio button */}
        <label>Male</label>
        <input
          name="gender"
          type="radio"
          value="male"
          checked={this.state.gender === "male"}
          onChange={this.handleChange}
        />
        <br />
        <label>Female</label>
        <input
          name="gender"
          type="radio"
          value="female"
          checked={this.state.gender === "female"}
          onChange={this.handleChange}
        />
        <br />
        <label>Favorite Color:</label>
        <select name="favColor" onChange={this.handleChange} value={this.state.favColor}>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="orange">Orange</option>
        </select>
        <h1>
          My name is {this.state.firstName} {this.state.lastName}
        </h1>
        <h1>I am a {this.state.gender}</h1>
        <h1>My favorite color is {this.state.favColor}</h1>
      </form>
    );
  }
}
export default FormReact;
