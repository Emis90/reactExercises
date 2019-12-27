import React from 'react'


class Palindrome extends React.Component {
  constructor(){
    super()
    this.state = {
      input:"",
      value:"Enter text and press the button!"
    }

    this.handleChange = this.handleChange.bind(this)
    this.checkValue = this.checkValue.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({...this.state, input: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault()
    let result = this.checkValue(this.state.input) //either true or false
    if (result === true) {
      this.setState({input: "", value: "Hooray! It's a Palindrome!"})
    } else {
      this.setState({input: "", value: "Sorry, not a Palindrome"})
    }
  }

  checkValue(input){
    let start = 0
    let end = input.length-1;

    while(start <= end) {
      if(input[start] !== input[end]){  //ciao
        return false
      }
      start++
      end--

    }
        return true
  }

  render() {
    return (
      <div className="App">
          <h1>Check if it's a Palindrome!</h1>
          <form onSubmit={this.handleSubmit}>
         <input type="text" value={this.state.input} onChange={this.handleChange} />
        <button>submit</button>
        </form>
        <h3>{this.state.value}</h3>

      </div>
    );
  }
}

export default Palindrome
