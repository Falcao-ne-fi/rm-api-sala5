
import s from './App.module.css'
import { useEffect, useState } from 'react'
import { api } from './constants/api'

import logo from '/logo.svg'

function App() {
  const [data, setData] = useState([])
  const [page, setPage] = useState()


  useEffect(() => {
    
    api.get(`/character`).then((response) => {
      setData(response.data.results)
      console.log(response.data.results)
    }).catch((error) => {
      CompositionEvent.log("deu Ruim!", error)

    })

  }, [page])

  return (
    <>
    <div>
      <label>Digite uma página</label>
      <input min={1} max={42} type="number" placeholder='1/42' value={page} onChange={(e) => setPage(Number(e.target.value))}/>
    </div>
    <h1>aurax</h1>
    <img className={s.logo} src={logo} alt="Logo" />
    <main>
      <div className={s.contents}>
          {data.map((item, index) => {
            return(
              
              <div key={index} className={s.cards}>
                <img src={item.image} alt={item.name} />
                <h4>name: {item.name}</h4>
                <p>Species: {item.species}</p>
                {item.status === "Dead" ? "Status:💀" : item.status === "Alive" ? "Status:❤️" : <p>Status: {item.status}</p>}
                <p>Origin: {item.origin.name}</p>
              </div>
        
            
              )
            })}
      </div>
    </main>
    </>
  )
}

export default App
