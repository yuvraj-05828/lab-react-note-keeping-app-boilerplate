import { Component } from "react";
import "./App.css"

export default class App extends Component{
  constructor(props){
    super(props);
    
    this.state = {
      value:""
    }

    this.hanldeChange = this.hanldeChange.bind(this);

  }

  hanldeChange = (event)=>{
    this.setState({
      value:event.target.value
    })
  }


  render(){
    return(
      <>
        <header className="header">
          <h1>Kalvium Note Keeping App</h1>
        </header>

        <div className="flex flex-space-between" >
          <div className="input" onSubmit={this.handleSubmit}>
            <h3>Input</h3>
            <textarea className="input-text" onChange={this.hanldeChange}/>
          </div>

          <div className="output">
            <h3>Pro Note</h3>
            <div className="output-text">
              <div className="text-color">
              {this.state.value}
              </div>
            </div>
          </div>
        </div>

      </>

    )
  }
}