import './App.css'
import SampleContext from './SampleContext'
import SampleEffect from './SampleEffect'
import SampleState from './SampleState'
import SampleReducer from './SampleReducer'

function App() {
 
  return (
    <>
    <h3>My Sample State:</h3>
    {/* useState  sample */}
     <SampleState/>

    {/* useEffect  sample */}
    <h3>My Sample Effect:</h3>
    {/* <SampleEffect/> */}

   {/* useContext sample */}

    <p>My Sample Context:</p>
    <SampleContext/>

    {/* useReducer */}
    <h3>My Sample Reducer</h3>
    <SampleReducer/>

    </>
  )
}

export default App
