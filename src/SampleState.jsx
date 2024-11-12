import { useState } from "react";

const SampleState=()=>{

    const [count,setCount] =useState(0)
    const [name,setName]=useState('')

    //assign value to object
    const [fullname,setFullName]=useState({fname:'',lname:''})

    const changeName=(e)=>{
        setName(e.target.value)
    }

    return(
        <>
        <p>Count:{count}</p>
        <button onClick={()=>setCount(count+1)}>Incrimrent</button>
        
        <p>FullName:{fullname.fname} {fullname.lname}</p>
        {/* spread or use  object.assign() */}
        <button onClick={()=>setFullName({...fullname,fname:'John',lname:'Clark'})}>Change FullName</button><br/> 
        <label>Enter Name:</label><br/>
        <input onChange={changeName}></input>
        <p>Name:{name}</p>
       
       
        </>
    )

}
export default SampleState