import React from 'react';

// JSX:直感的にHTMLを表現ができるため、JSではなく、JSX(xlm)を使用
// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => {console.log("I am Chinko")}} />
//       </React.Fragment>
//     )
//   }
// }

// function components
const App = () => { 
  return ( 
    <>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </>
  )
}

const Cat = () => { 
  return <div>Meowo</div>
}

export default App;
