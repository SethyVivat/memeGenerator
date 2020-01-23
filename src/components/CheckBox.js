import React from "react";
import TodoItem from "./TodoItem";
import TodoData from "./TodoData";

// function CheckBox() {
//   const temp = TodoData.map((item) =>
//   <TodoItem todo={item} />
//   );
//   return (
//     <div className="todo-list">
//       <header className="title">Todo List</header>
//       {temp}
//     </div>
//   );
// }

// function CheckBox() {
//   const temp = TodoData.map(item => <TodoItem todo={item}/>)
//   return (
//     <div className="todo-list">
//       <header className="title">Todo List</header>
//       {temp}
//     </div>
//   );
// }

// todo app phase 4
// class CheckBox extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       Todos: TodoData
//     }
//   }
//   render() {
//     const temp = this.state.Todos.map(item => <TodoItem todo={item} />)
//     return(
//       <div className="todo-list">
//         <header className="title">Todo List</header>
//         {temp}
//       </div>
//     )
//   }
// }
// todo app phase 5
// C:\Users\Vivat\react-app\src\components\TodoItem.js

// todo app phase 6
class CheckBox extends React.Component {
  constructor() {
    super();
    this.state = {
      Todos: TodoData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.Todos.map(item => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      });
      return {
        Todos: updatedTodos
      };
    });
  }

  render() {
    const temp = this.state.Todos.map(item => (
      <TodoItem todo={item} key={item.id} handleChange={this.handleChange} />
    ));

    return (
      <div className="todo-list">
        <header className="title">Todo List</header>
        {temp}
      </div>
    );
  }
}
export default CheckBox;
