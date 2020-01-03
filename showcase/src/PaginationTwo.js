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
    allPages[`page${page}`] = [...group, poke]
  }
  page ++
  k = k + pokePerPage
}
console.log(allPages)
updateBook({content: allPages})
}

 getData()

}, [])

console.log(book.content)
  return (
    <div>

     {
       book.content['page2'] && book.content['page2'].map((poke, id) => {

         return <p key={id}>{poke.name}</p>

       })
     }
    </div>
  )
}

export default PaginationTwo
