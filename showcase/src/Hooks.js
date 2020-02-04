import React, {useState} from 'react'

function Hooks() {
    const [pages, changePages] = useState(1)
    const [name, changeName] = useState({first: '', last: ''})
    const [note, setNote] = useState({word: '', list: []})

    const add = (e) => {
      e.preventDefault();
      setNote({word:'', list: [...note.list, note.word]})
    }

    const deleteNote = (idx) => {
      setNote({...note, list: note.list.filter((el, id) => {return id !== idx})})
    }

        return(
          <div>
                <div className="notes">
            <form onSubmit={add}>
              <input type="text" placeholder="add note here" value={note.word}
                onChange={(e) => setNote({...note, word: e.target.value})}
              />
              <button>Add</button>
              <ul>
              {
                note.list.map((word, i) => {
                  return (
                    <p key={i} onClick={()=>deleteNote(i)}>{word} X</p>
                 )})
              }
            </ul>
            </form>
          </div>
          <div className='counter'>
            <p>Change pages</p>
            <button onClick={()=> changePages(prev => prev + 1)}>next</button>
            <h2>{pages}</h2>
            <button onClick={()=> changePages(prev => prev > 0 ? prev - 1 : prev = 0)}>previous</button>
            </div>

          <div className='name'>
            <form>
              <input type="text" value={name.first}
               onChange={(e)=> changeName({...name, first: e.target.value})}
              />
              <input type="text" value={name.last}
                onChange={(e)=> changeName({...name, last: e.target.value})}
              />
              <h3>Your name is: {name.first} {name.last}</h3>
            </form>
          </div>
          </div>
        )


    }

export default Hooks
