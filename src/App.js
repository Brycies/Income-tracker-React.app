import React, {useState, useEffect} from Rreact;
import header from './components/header';

function App() {

  const [income, setIncome] = useState()
  const [totalIncome, setTotalIncome] = useState (0)


  return (
  <div className="App">
    <header totalIncome={totalIncome}/>
  </div>
  )
}

export default App;
