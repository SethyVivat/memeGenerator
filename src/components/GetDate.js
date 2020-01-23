import React from "react";

function GetDate() {
    const date = new Date(2019, 11, 18, 18);
    const hour = date.getHours();
    let timeOfDay
    const styles = {
        fontSize: 24
    }

    if (hour < 12) {
        timeOfDay = "Morning"
        styles.color = "teal"
    } else if(hour >=12 && hour <=17) {
        timeOfDay = "Afternoon"
        styles.background = "teal"
    } else{
        timeOfDay = "Night"
        styles.fontSize = 100
    }
        
    return (
    <h1 style={styles}>Good {timeOfDay}!</h1>
    )
}

export default GetDate;