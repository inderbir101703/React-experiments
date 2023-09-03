import { useEffect, useState } from "react"


const useOnlineStatus=()=>{
    const[tatus,setStatus]=useState(true)

    useEffect(()=>{
  window.addEventListener("online",()=>{setStatus(true)})
  window.addEventListener("offline",()=>{setStatus(false)})

    },[])

return tatus
}
export default useOnlineStatus