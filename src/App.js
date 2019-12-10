import React,{ Component } from 'react';
import './App.css';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
// import faker from 'faker';
// import CommentDetails from './CommentDetails';
// import ApprovalCard from './ApprovalCard'

// ///////Buildeing content with jsx///////////
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

//////////////communication with prpos////////////
// function App() {
//   return (
//     <div className="ui container comments">
//       <ApprovalCard>
//         <CommentDetails
//           author="Sam"
//           timeAgo="Today At 4.45PM"
//           info="Nice post"
//           avatar={faker.image.avatar()} />
//       </ApprovalCard>
//       <ApprovalCard>
//         <CommentDetails
//           author="Alex"
//           timeAgo="Today At 6.05PM"
//           info="I like the subject"
//           avatar={faker.image.avatar()} />
//       </ApprovalCard>    <ApprovalCard>
//         <CommentDetails
//           author="Jane"
//           timeAgo="Today At 12.35PM"
//           info=" I like writing"
//           avatar={faker.image.avatar()} />
//       </ApprovalCard>


//     </div>
//   )
// }

/////////classbased component//////////
// function App () {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   )
//   return (
//     <div>HI there</div>
//   )
// } 

///////Insted of function component using calss component//////
////////states in React component//////////
class App extends Component {
  
  // ///one type of initialization state using constructor////
  // constructor (props) {
  //   super(props);
  //   /////this only time we do direct assignment
  //   //to this.state
  //   this.state = { lat: null, errorMessages:'' };

  //   ////using state in react section////
  //   // window.navigator.geolocation.getCurrentPosition(
  //   //   position => {this.setState({lat: position.coords.latitude})},
  //   //   err => {this.setState({errorMessages: err.message})}
  //   // )
    
  // }

  ///// second type of state initialization without using constructor but in babel by defaulf it was converting js format////
   
    state = { lat: null, errorMessages: ''}

  /////using lifecycle methods/////

    componentDidMount() {
      window.navigator.geolocation.getCurrentPosition(
        position => this.setState({lat: position.coords.latitude}),
        err => this.setState({errorMessages: err.message})
      )
    }

    ///// Avoiding multiple return if condition in render
    renderContent() {
    //cheacking if lat is there on that time display only lat value
    // if lat is no there on that time display Error message
    //if both are not there display loading message
    if(this.state.errorMessages && !this.state.lat){
      return <div>Error: { this.state.errorMessages}</div>
    }else if(!this.state.errorMessages && this.state.lat){
      // return <div>Latitude: { this.state.lat}</div>
      return <SeasonDisplay lat = {this.state.lat} />
    }else {
      // return <div>Loading</div>
      return <Spinner message="Please accept location request " />
    }
    } 
    
  //React says we have to  define render!!!
  render() {
    return(
    <div className="border red">
      {this.renderContent()}
    </div>
    )
  }
}
export default App;
