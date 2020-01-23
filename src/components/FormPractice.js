import React, { Component } from "react";
import EventHandling from "./EventHandling";
// TRAVEL FORM
class FormPractice extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      location: false,
      isKoher: false,
      isLactoseFree: false,
      isVeget: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  render() {
    return (
      <form style={{ marginLeft: 10 }}>
        {/* Customer Name */}
        <h1>General Information</h1>
        <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}
          placeholder="firstname"
        />
        <br />
        <input
          type="text"
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleChange}
          placeholder="lastname"
        />
        <br />
        {/* Age */}
        <input
          type="number"
          name="age"
          value={this.state.age}
          onChange={this.handleChange}
          placeholder="age"
        />
        <br />
        {/* Gender */}
        <h1>Gender</h1>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          />
          Male
        </label>

        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          />
          Female
        </label>

        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="others"
            checked={this.state.gender === "others"}
            onChange={this.handleChange}
          />
          Others
        </label>

        <br />
        {/* Location */}
        <h1>Where do you wanna go?</h1>
        <select
          name="location"
          value={this.state.location}
          onChange={this.handleChange}
        >
          <option value="">​--- Please Choose the location ---</option>
          <option value="​​សៀមរាប">​​សៀមរាប</option>
          <option value="ភ្នំពេញ">ភ្នំពេញ</option>
          <option value="តាកែវ">តាកែវ</option>
        </select>
        {/* Diet Restriction */}
        <h1>Diet Restriction</h1>
        <label>
          <input
            type="checkbox"
            name="isKoher"
            checked={this.state.isKoher}
            onChange={this.handleChange}
          />
          Koher
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="isLactoseFree"
            checked={this.state.isLactoseFree}
            onChange={this.handleChange}
          />
          Lactos Free
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="isVeget"
            checked={this.state.isVeget}
            onChange={this.handleChange}
          />
          Vegetarian
        </label>
        <hr />
        <h1>
          Your name: {this.state.firstName} {this.state.lastName}
          <br />
          Age: {this.state.age}
          <br />
          Gender: {this.state.gender}
          <br />
          Location: {this.state.location}
          <br />
          Koher: {this.state.isKoher ? "yes" : "no"}
          <br />
          Lactos free: {this.state.isLactoseFree ? "yes" : "no"}
          <br />
          Vegetarian: {this.state.isVeget ? "yes" : "no"}
        </h1>
      </form>
    );
  }
}
export default FormPractice;
