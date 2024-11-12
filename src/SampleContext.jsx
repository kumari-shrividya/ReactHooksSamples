import { createContext,useContext } from "react";


const userContext=createContext()

const SampleContext=()=>{

   const data='John'

  return(
    <userContext.Provider value={data}>
    <MyComponent/>
    </userContext.Provider>

  )

}

function MyComponent(){

    const value=useContext(userContext)

    return(
        <span>Welcome {value}</span>
    )
}

export default SampleContext