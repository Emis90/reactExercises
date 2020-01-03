import React, {useState, useEffect} from 'react'
import axios from 'axios';

function PaginationThree() {
  const [pokes, setPokes]  = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [pokesPerPage, setPokesPerPage] = useState(3)

  useEffect(()=> {

    const getData = async() =>{
      setLoading(true);
      const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon');
      setPokes(data.results)
      setLoading(false)
    }

    getData()
  }, [])

  console.log(pokes)

  return (
    <div>
    {loading ? (<p>loading</p>) : (<p>Poke page</p>)}

    </div>
  )
}

export default PaginationThree
