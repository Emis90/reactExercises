import React, {useState, useEffect} from 'react'
import axios from 'axios'


class Pagination extends React.Component {
  constructor(){
    super()
    this.state = {}
  }

  async componentDidMount(){
    let result = await axios.get("https://pokeapi.co/api/v2/pokemon")
    console.log(result.data)
    this.setState(result.data)
  }

  render() {
    return(
      <div>
        <h1>This is the pagination page</h1>
      </div>
    )
  }

}


export default Pagination
