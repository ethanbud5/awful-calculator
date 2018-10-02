import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calc from "./Calc";

class App extends Component {
  constructor(){
    super()
    this.state ={
      num1:0,
      num2:0,
      method:null
    }
    this.changeHandler = this.changeHandler.bind(this)
  }
  changeHandler(e){
    let {name,value,nodeName} = e.target;
    if(nodeName==="INPUT"){
      this.setState({
        [name]:value
      })
    }
    else{
      this.setState({
        method:value
      })
    }
  }

  render() {
    console.log(this.state)
    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Calc
          num1={this.state.num1}
          num2={this.state.num2}
          changeHandler={this.changeHandler}
          method={this.state.method}
        />
      </div>
    );
  }
}

export default App;
