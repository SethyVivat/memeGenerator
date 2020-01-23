// import React from "react"

// function Joke(props) {
//     return(
//         <div>
//             <h1 style="{background: teal, color: white, fontWeight: bold}">JOKE with question and Punchline</h1>
//             <h3>Question: {props.question}</h3>
//             <h3>Punchline: {props.punchline}</h3>
//             <hr>
//         </div>
//     )
// }

// export default Joke
import React from "react"
function Joke(props) {
    return(
        <div>
            <h3 style={{display: !props.question && "none"}}>Question: {props.question}</h3>
            <h3>Punchline: {props.punchline}</h3>
            <hr/>
        </div>
    )
}

export default Joke