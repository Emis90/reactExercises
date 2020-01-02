import React, {useState, useEffect} from 'react'
import axios from 'axios'

function PaginationTwo() {
  const [book, updateBook] = useState({content: {}})

  useEffect(() => {
    const getData = async() => {
    let {data} = await axios.get('https://pokeapi.co/api/v2/pokemon')
    // console.log('data >>', data)
    let pokePerPage = 7
    let pokemons = data.results
    let k = 0;
    let page = 1
    let allPages = {}

    while (k < pokemons.length) {
      let subArr = pokemons.slice(k, k + pokePerPage)
      let group = []
      for (let i = 0; i < subArr.length; i++){
      let poke = subArr[i]
      group.push(poke)
      allPages[`page${page}`] = [...group]
    }
    page ++
    k = k + pokePerPage
  }

  updateBook({content: allPages})

  }


    getData()

  }, [])

 const showState = () => {
 book.content['page1'].map(el => console.log(el))
 }

  //data.results = array of 20 pokemons
  //data.next = new url for the next 20 pokemons


  return (
    <div>
    <button onClick={showState}>showState</button>
   {/* {book.content['page1'].map((el, id) =>  { return <p key={id}>{el.name}</p>})} */}
    </div>
  )
}

export default PaginationTwo
