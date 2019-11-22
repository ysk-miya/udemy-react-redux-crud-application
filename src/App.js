// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import React, { Component } from 'react';
// import PropTypes from 'prop-types';


const App = () => (<Counter></Counter>)
// const profiles = [
//   { name: "Taro", age: 10 },
//   { name: "Hanako", age: 5 },
//   { name: "Noname", age: 3 }
// ]

class Counter extends Component {
  constructor(props) {
    super(props)
    console.log(this.state)
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    // console.log("handlePlusButton")
    // console.log(this.state.count)
    this.setState({ count: this.state.count + 1 })
  }

  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 })
  }
  //setRtateが実行されるとrender()が実行されるようになっている
  render() {
    return (
      <React.Fragment>
        <div>count:{this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}



// User.defaultProps = {
//   age: 1
// }
// User.PropTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number.isRequired
// }

export default App;

// class App extends Component {
//   render() {
//     return <h1>Hello,world</h1>;
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


