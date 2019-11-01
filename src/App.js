import React from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './temp';
import LoginLogout from './conditionalRendering';
import HideMessage from './conditionalRendering2';
import listElem from './Lists';

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      time: new Date()
    };
  }

  updateTime(){
    // console.log('i am running!');
    this.setState({
      time: new Date()
    });
  }

  componentDidMount(){
    this.timer = setInterval(() => this.updateTime(), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.time);
  }

  render(){
    return(<div>
      <h2>Hello</h2>
      time is {this.state.time.toLocaleTimeString()}
    </div>);
  }
}

function Action(e){
  e.preventDefault();
  console.log('the link was clicked');
}

function Link(){
  return(
    <div>
      <a href="#" onClick={Action} >click me !</a>
      <Toggle />
    </div>
  );
}

function App() {
  return (
    <div>{listElem}</div>
    // <HideMessage />
    );
}



export default App;
