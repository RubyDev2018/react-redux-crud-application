import React from 'react';
import PropTypes from 'prop-types';

// JSX:直感的にHTMLを表現ができるため、JSではなく、JSX(xlm)を使用
const App = () => {
  const profiles = [
    { name: "Taro", age: 7 },
    { name: "Hanako", age: 4 },
    { name: "NoName", age: 3 }
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
  return <div>Hi, I am {props.name}, and {props.age} yaers old!</div>
}

// 型タイプを設定
User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
