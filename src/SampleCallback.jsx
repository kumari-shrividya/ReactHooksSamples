import { useCallback,useState } from "react";

function SampleCallback(){

    //to check how many times function created inside component's  render after useCallback
    const functionCounter=new Set()

    const [count,setCount]=useState(0)
    const [otherCnt,setOtherCnt]=useState(0)

    const incriment=useCallback(()=>{
        setCount(count+1)
    },[count])

    const decriment=useCallback(()=>{
        setCount(count-1)
    },[count])

    const incrimentOtherCnt=useCallback(()=>{
        setOtherCnt(otherCnt+1)
    },[otherCnt])


    functionCounter.add(incriment)
    functionCounter.add(decriment)
    functionCounter.add(incrimentOtherCnt)
    console.log(functionCounter.size)


    return(
        <>
        <div>
        Count:{count}   
       <p>OtherCount:{otherCnt}</p> 
        </div>
       
        <button onClick={incriment}>Incriment</button>
        <button onClick={decriment}>Decriment</button>
        <button onClick={incrimentOtherCnt}>IncrimentOthercnt</button>
        </>
    )

}
export default SampleCallback