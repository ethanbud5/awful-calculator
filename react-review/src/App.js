import React, { Component } from 'react';
import jedi from "./jedi.json"
import './App.css';
import List from "./List"

class App extends Component {
  constructor(){
    super()
    console.log(jedi)
    this.state = {
      jedi:jedi,
      pageStart:0,
      pageEnd:20,
      person:null
    }
    this.paginate = this.paginate.bind(this)
    this.displayPerson = this.displayPerson.bind(this)
  }
  componentDidMount(){

  }
  paginate(direction){
    if(direction==="+"){
      this.setState({
        pageStart:this.state.pageStart+20,
        pageEnd:this.state.pageEnd+20
      });
    }
    else{
      this.setState({
        pageStart:this.state.pageStart-20,
        pageEnd:this.state.pageEnd-20
      });
    }
  }
  displayPerson(name){
    let person = this.state.jedi.find((person)=>{
      return person.name===name;
    })
    this.setState({person})
    console.log("name ",person)
  }
  render() {
    console.log(this.state)
    let {pageStart,pageEnd} = this.state;
    let jedi = this.state.jedi.slice(pageStart,pageEnd)
    return (
      <div className="App">
        <aside className="side_bar">
          <List handleClick={this.displayPerson} paginate={this.paginate} listArray={jedi}/>
        </aside>
        {
          this.state.person
          ?
        <main className="main">
          <h1>{this.state.person.name}</h1>
          <h3>{this.state.person.height}</h3>
          <h3>{this.state.person.eye_color}</h3>
        </main>
        :null
        }
      </div>
    );
  }
}

export default App;
