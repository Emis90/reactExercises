import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Posts from './Posts';
import PaginationPosts from './PagiantionPosts'

function PaginationThree() {
  const [pokes, setPokes]  = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [pokesPerPage] = useState(5)

  const paginate = (num) => {
    setCurrentPage(num)
  }


  useEffect(()=> {

    const getData = async() =>{
      setLoading(true);
      const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon');
      setPokes(data.results)
      setLoading(false)
    }

    getData()

  }, [])

  //get current posts
  const idxLastPoke = currentPage * pokesPerPage
  const idxFirstPoke = idxLastPoke - pokesPerPage
  const current = pokes.slice(idxFirstPoke, idxLastPoke)

  return (
    <div>
    <Posts pokes={current} loading={loading} />
    <PaginationPosts pokesPerPage={pokesPerPage} totalPokes={pokes.length} paginate={paginate}/>
    </div>
  )
}

export default PaginationThree
