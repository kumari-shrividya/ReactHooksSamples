import './App.css'
import SampleContext from './SampleContext'
import SampleEffect from './SampleEffect'
import SampleState from './SampleState'
import SampleReducer from './SampleReducer'
import SampleRef from './SampleRef'
import SampleCallback from './SampleCallback'

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

    <h3>My Sample Context:</h3>
    <SampleContext/>

    {/* useReducer */}
    <h3>My Sample Reducer</h3>
    <SampleReducer/>


    {/* useRef */}
    <h3>My Sample Ref</h3>
    <SampleRef/>

    {/* useCallback */}
    <h3>My Sample Callback</h3>
    <SampleCallback/>
    </>
  )
}

export default App
