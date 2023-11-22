import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {count: 0}
  }

 

  handleIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  };

 

    render() {
    return (
      <table >
        
        <tr>
            
            <td>
                Count: 
                {this.state.count}
                <div>
                <button onClick={this.handleIncrement}>Incremenent</button>
                </div>
            </td>
           
        </tr>
      </table>
    )
  }
}