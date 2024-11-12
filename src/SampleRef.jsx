import { useRef,useEffect } from "react";


const SampleRef=()=>{

    const inputRef=useRef()

    const handle=()=>{
        inputRef.current.value=1000
    }

    console.log(inputRef.current) //undefined before mount

    //execute after mount
    useEffect(()=>{
        console.log(inputRef.current)
    })

    return(
        <>
        <input type="text" ref={inputRef}/>
        <button onClick={handle}>click Me</button>
        </>
    )
}
export default SampleRef