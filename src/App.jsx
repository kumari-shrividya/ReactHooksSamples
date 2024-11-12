import './App.css'
import SampleContext from './SampleContext'
import SampleEffect from './SampleEffect'
import SampleState from './SampleState'
import SampleReducer from './SampleReducer'
import SampleRef from './SampleRef'
import SampleCallback from './SampleCallback'
import SampleMemo from './SampleMemo'

function App() {
 
  return (
    <>
    <h3>1.My Sample State:</h3>
    {/* useState  sample */}
     <SampleState/>

    {/* useEffect  sample */}
    <h3>2.My Sample Effect:</h3>
    {/* <SampleEffect/> */}

   {/* useContext sample */}

    <h3>3.My Sample Context:</h3>
    <SampleContext/>

    {/* useReducer */}
    <h3>4.My Sample Reducer</h3>
    <SampleReducer/>


    {/* useRef */}
    <h3>5.My Sample Ref</h3>
    <SampleRef/>

    {/* useCallback */}
    <h3>6.My Sample Callback</h3>
    <SampleCallback/>


    {/* useMemo */}

    <h3>7.My Sample Memo</h3>
    <SampleMemo/>
    </>
  )
}

export default App
