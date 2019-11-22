// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import React from 'react';
import PropTypes from 'prop-types';


const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 5 },
    { name: "Noname", age: 3 }
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi!,I am{props.name},and {props.age}years old</div>
}

// User.defaultProps = {
//   age: 1
// }
User.PropTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

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


