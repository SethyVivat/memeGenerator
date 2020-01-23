import React from "react";
import Joke from "./Joke";
import jokesData from "./jokesData";

function GetJokes() {
  const temp = jokesData.map(joke => (
    <Joke question={joke.question} punchline={joke.punchline} key={joke.id} />
  ));
  return (
    <div>
      <h1 style={{ background: "teal", color: "white", fontWeight: "bold" }}>
        Joke with Question and Punchline
      </h1>
      {temp}
    </div>
  );
}

export default GetJokes;
