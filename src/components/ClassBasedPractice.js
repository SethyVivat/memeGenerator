import React from "react"
// import Header from "./Header"
// import Greeting from "./Greeting"

//#1
class ClassBasedPractice extends React.Component {
    render(){
        return (
            <div>
                <Headers username="Vivat"/>
                <Greeting />
            </div>
        )
    }
}

//#2
class Headers extends React.Component {
    render(){
        return(
            <header>
                <h1>Welcome, {this.props.username}!</h1>
            </header>
        )
    }
}

//#3
class Greeting extends React.Component{
    render(){
        const date = new Date();
        const hours = date.getHours();
        let timeOfDay;
        if (hours < 12) {
            timeOfDay = "Morning"
        }else if (hours >= 12 && hours < 17) {
            timeOfDay = "Afternoon"
        }else {
            timeOfDay = "Night"
        }
        return (
        <h5>Good {timeOfDay} to you sir or madam.</h5>
        )
    }
}
export default ClassBasedPractice