import React, {useState, useEffect} from 'react'
import axios from 'axios'

function PaginationTwo() {
const [book, updateBook] = useState({content: {}})
const [currentPage, updatePage] = useState(book.content['page1'])

useEffect(() => {
  const getData = async() => {
  let {data} = await axios.get('https://pokeapi.co/api/v2/pokemon')
  // console.log('data >>', data)
  let pokePerPage = 5
  let pokemons = data.results
  let k = 0;
  let page = 1
  let allPages = {}

  while (k < pokemons.length) {
    let subArr = pokemons.slice(k, pokePerPage + k)
    let group = []
    for (let i = 0; i < subArr.length; i++){
    let poke = subArr[i]
    group.push(poke)
    allPages[`page${page}`] = [...group]
  }
  page ++
  k = k + pokePerPage
}

let firstPage = allPages[`page1`]

updateBook({content: allPages})
updatePage(firstPage)
}

getData()


},[])


const changePage = (idx) => {
   updatePage(book.content[`page${idx}`])
}

// console.log(currentPage)//its undefined!
  return (
    <div>
      {
       book.content && Object.keys(book.content).map((pages, idx)=> {
         return <button key={idx} onClick={()=>changePage(idx + 1)}>{idx + 1}</button>
       })
     }
     {
       currentPage && currentPage.map((poke, id) => {
         return <p key={id}>{poke.name}</p>

       })
     }

    </div>
  )
}

export default PaginationTwo
