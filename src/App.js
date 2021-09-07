import React, {Component} from 'react';

// JSX:直感的にHTMLを表現ができるため、JSではなく、JSX(xlm)を使用
class App extends Component {
  render() {
    return <h1>Hello, world!</h1>;
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
