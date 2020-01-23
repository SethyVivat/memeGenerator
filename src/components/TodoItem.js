import React from "react";

function TodoItem(props) {
  const textStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  }
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={() => props.handleChange(props.todo.id)} // todo app phase 5
      />
      <p // todo app final phase
        // style={{
        //   fontStyle: props.todo.completed && "italic",
        //   color: props.todo.completed && "#cdcdcd",
        //   textDecoration: props.todo.completed && "line-through"
        // }}
        style={props.todo.completed ? textStyle : null}
        // style={textStyle: props.todo.completed }
        
      >
        {props.todo.text}
      </p>
    </div>
  );
}

// class TodoItem extends React.Component {
// constructor() {
//   super();
//   this.state = {
//     complete: this.todo.completed
//   };

//   this.changeTickValue = this.changeTickValue.bind(this)
// }

// changeTickValue() {
//   this.setState(prevState => {
//     console.log(prevState.complete)
//   })
// }

// render() {
//   return (
//     <div className="todo-item">
//       <input
//         type="checkbox"
//         checked={this.props.todo.completed}
//         onChange={() => console.log("something is changing!")} // todo app phase 5
//         onClick={this.props.changeTickValue}
//       />
//       <p>{this.props.todo.text}</p>
//     </div>
//   );
// }
// }

export default TodoItem;
