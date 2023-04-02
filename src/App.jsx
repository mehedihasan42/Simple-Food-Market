import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import PriceList from './Components/PriceList/PriceList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar></NavBar>
     <h1 className="text-5xl text-orange-500 font-bold text-center mb-4">
      Bangla Bazar
    </h1>
    <PriceList></PriceList>
    </div>
  )
}

export default App
