import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Skelton from "../skelton"

const RestaurantMenu=()=>{
const[resData,setResData]=useState({})
const {resId}=useParams()
console.log(resId)

    const fetchData=async()=>{
        const response=await fetch('https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.6339793&lng=74.8722642&restaurantId='+resId)
        const data=await response.json()
        console.log(data,'found')
   setResData(data?.data)
    }
    useEffect(()=>{
        console.log('in useeffect')
         fetchData()
    },[])
    if(Object.keys(resData).length === 0){
       
    return <Skelton/>}
  if(resData?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ){
     const {itemCards}=resData?.cards?.[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card 
   

    const {name,cloudinaryImageId,cuisines,costForTwoMessage}=resData?.cards[0]?.card?.card?.info
    return <div className="m-4 p-4 w-[200px] bg-gray-50 ">

        <h1>{name}</h1>
        <h2>{cuisines}</h2>
        <h2>{costForTwoMessage}</h2>
        <h2>Menu</h2>
        <ul>
        {itemCards?.map((item)=>
<li key={item?.card?.info?.id}>{item?.card?.info?.name}- Rs.
{item?.card?.info?.price/100|| item?.card?.info?.defaultPrice/100}
</li>
        )}
    
       
        </ul>
    </div>}
}

export default RestaurantMenu