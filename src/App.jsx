import './App.css'
import SampleContext from './SampleContext'
import SampleEffect from './SampleEffect'
import SampleState from './SampleState'


function App() {
 
  return (
    <>
    {/* useState  sample */}
     <SampleState/>

    {/* useEffect  sample */}

    {/* <SampleEffect/> */}

   {/* useContext sample */}

    <p>My Sample Context:</p>
    <SampleContext/>

    </>
  )
}

export default App
