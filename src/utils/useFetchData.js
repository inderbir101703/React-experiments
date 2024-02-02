import { useEffect, useState } from "react"
const useFetchData=()=>{
const [data,setData]=useState(null)
const fetchData=async()=>{
    const data=await fetch('https://www.swiggy.com/mapi/homepage/getCards?lat=31.6339793&lng=74.8722642')
    const pdata=await data.json()

    setData(pdata?.data.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)}
useEffect(()=>{
 fetchData()
},[])


return data


}

export default useFetchData