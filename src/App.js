import React from 'react';
import './App.css';
import faker from 'faker';


// function App() {
//   // const submit = 'Click me!';
//      const submit = { text:'Click me!'}
//      const label = ' Enter name:'
//      const style = {backgroundColor:'blue',color:'white'}
//   return (
//    <div>
//      <label className="label" htmlFor="name">
//     {label}
//      </label>
//      <input id="name" type="text" />
//      <button style={style}>{submit.text}</button>
//      </div>
//   );
// }


function App() {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar"  src={faker.image.avatar()}/>
        </a>
        <div className="content">
          <a href="/" className="auther">
            sam
          </a>
          <div className="metadata">
            <span className="date">today at 6:00pm</span>
          </div>
          <div className="text">Nice blog post!</div>
        </div>
      </div>
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar"  src={faker.image.avatar()}/>
        </a>
        <div className="content">
          <a href="/" className="auther">
            sam
          </a>
          <div className="metadata">
            <span className="date">today at 6:00pm</span>
          </div>
          <div className="text">Nice blog post!</div>
        </div>
      </div>
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar"  src={faker.image.avatar()}/>
        </a>
        <div className="content">
          <a href="/" className="auther">
            sam
          </a>
          <div className="metadata">
            <span className="date">today at 6:00pm</span>
          </div>
          <div className="text">Nice blog post!</div>
        </div>
      </div>
    </div>
  )
}
export default App;
