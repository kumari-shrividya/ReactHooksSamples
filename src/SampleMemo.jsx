import { useMemo } from "react";

const SampleMemo=()=>{

    const data=useMemo(()=>{

        for(let i=0;i<100000;i++){}
        return 'Hello World'
    },[])
    return(
        <>
        {data}
        </>
    )
}
export default SampleMemo