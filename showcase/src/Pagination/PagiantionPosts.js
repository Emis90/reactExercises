import React from 'react'

function PagiantionPosts({pokesPerPage, totalPokes, paginate}) {
  const pageNums = []
  for (let i = 1; i < Math.ceil(totalPokes / pokesPerPage); i++) {
    pageNums.push(i)
  }

  return (
    <nav>
     {pageNums.map(num => (
       <button onClick={()=> paginate(num)}>{num}</button>
     ))}
    </nav>
  )
}

export default PagiantionPosts
