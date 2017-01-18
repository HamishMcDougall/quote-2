import React, { Component } from 'react';



class TodoUI extends Component {
  render() {
    return (
      <div >
        <li key={item.key}>{item.text}</li>
        <button>delete</button>
      </div>
    );
  }
}

export default TodoUI;
