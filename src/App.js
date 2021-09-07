import React, {Component} from 'react';

// JSX:直感的にHTMLを表現ができるため、JSではなく、JSX(xlm)を使用
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => {console.log("I am Chinko")}} />
      </React.Fragment>
    )
  }
}

// JS
// class App extends Component {
//   render() {
//     return React.createElement(
//       "div",
//       null,
//       "Hello, world!!!"
//     )
//   }
// }

export default App;
