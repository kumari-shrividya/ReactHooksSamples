import { useState,useEffect } from "react";
import Timer from "../../Testing/Todo/src/Timer";

const SampleEffect=()=>{

    const [count,setCount]=useState(0)

    //execute on each render or change of state count
    useEffect(()=>{
        document.title=`you clicked ${count} times`
        console.log('Effect triggered')
    })

    // Timer
    useEffect(() => {

        let id = setInterval(() => {
          setCount(count + 1);
        }, 1000);
    
        return ()=>{
            clearInterval(id)
        }
      },[count]);

    return(
        <>
        <p>{count}</p>
        <button onClick={()=>setCount(count + 1)}>Incriment Title count</button>
        </>
    )
}
export default SampleEffect