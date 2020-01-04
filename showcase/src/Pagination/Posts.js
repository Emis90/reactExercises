import React from 'react'

function Posts({pokes, loading}) {
  if (loading) {
    return <div>
      <p>loading...</p>
    </div>
  } else {


  return (
    <div>
    {pokes.map((poke, id)=> {
      return <p key={id}>{poke.name}</p>
    })}
    </div>
  )
  }
}

export default Posts
