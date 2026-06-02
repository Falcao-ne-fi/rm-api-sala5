
import './App.module.css'
import { useEffect, useState } from 'react'
import { api } from './constants/api'

function App() {
  const [data, setData] = useState([])


  useEffect(() => {
    
    api.get(`/character`).then((response) => {
      setData(response.data.results)
      console.log(response.data.results)
    }).catch((error) => {
      CompositionEvent.log("deu Ruim!")

    })

  }, [ ])

  return (
    <>
      <h1>aurax</h1>
    </>
  )
}

export default App
