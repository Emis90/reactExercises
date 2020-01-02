import React, {useState, useEffect} from 'react'
import axios from 'axios'


const PaginationOne = () => {

const [ state, updateState ] = useState({pokemons: [], data: {}, next: '', prev: ''})

const fetchData = async(URL) => {
  let {data} = await axios.get(URL)
  console.log('data >>', data)
  updateState({pokemons: data.results, next: data.next, prev: data.previous})

}

useEffect(()=> {
  let URL = 'https://pokeapi.co/api/v2/pokemon';
  fetchData(URL)
},[])

const nextPage = () => {
  if(state.next === null) {
    return
  }
  fetchData(state.next)
}

const prevPage = () => {
  if(state.prev === null) {
    return
  }
  fetchData(state.prev)
}
   return (

    <div>
    <p>This is the Pagination Part 1 page, checkout some Pokemons:</p>
    <button onClick={prevPage}>Prev</button>
    <button onClick={nextPage}>Next</button>
      {
        state.pokemons.map((poke, i) => {
        return <p key={i}>{poke.name} <br/>&hearts;</p>
        })
      }
      <button onClick={prevPage}>Prev</button>
      <button onClick={nextPage}>Next</button>
     </div>
   )
}


export default PaginationOne
