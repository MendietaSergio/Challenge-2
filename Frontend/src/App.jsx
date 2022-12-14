import { Questions } from "./components/Questions/Questions"
import { Results } from "./components/Results/Results"
import { Searching } from "./components/Searching/Searching"

function App() {


  return (
    <div className="App">

      <div className='body-card'>
        <div className='container-info'>
          {/* <Questions /> */}
          {/* <Results /> */}
          <Searching />
        </div>
      </div>
    </div>
  )
}

export default App
