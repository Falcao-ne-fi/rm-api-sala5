
import s from './App.module.css'
import { useEffect, useState } from 'react'
import { api } from './constants/api'

import logo from '/logo.svg'

function App() {
  const [data, setData] = useState([])


  useEffect(() => {
    
    api.get(`/character`).then((response) => {
      setData(response.data.results)
      console.log(response.data.results)
    }).catch((error) => {
      CompositionEvent.log("deu Ruim!", error)

    })

  }, [ ])

  return (
    <>
      <h1>aurax</h1>
      <img className={s.logo} src={logo} alt="Logo" />
      <main>
        {data.map((item, index) => {
          return(
            <div key={index}>
              <img src={item.image} alt={item.name} />
              <h4>name: {item.name}</h4>
              <p>Species: {item.species}</p>
              {item.status === "Dead" ? "Status:💀" : item.status === "Alive" ? "Status:❤️" : <p>Status: {item.status}</p>}
              <p>Origin: {item.origin.name}</p>
            </div>
          )
        })}
      </main>
    </>
  )
}

export default App
