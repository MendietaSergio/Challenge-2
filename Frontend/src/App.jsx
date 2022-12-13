import { Questions } from "./components/Questions/Questions"
import { Results } from "./components/Results/Results"

function App() {


  return (
    <div className="App">

      <div className='body-card'>
        <div className='container-info'>
          <Questions />
          {/* <Results /> */}
        </div>
      </div>
    </div>
  )
}

export default App
