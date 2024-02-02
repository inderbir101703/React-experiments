import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import RestaurantFoodCategory from "../RestaurantFoodCategory"
import Skelton from "../skelton"

const RestaurantMenu=()=>{
const[resData,setResData]=useState({})
const [categories,setCategories]=useState([])
const [index,setIndex]=useState(0)
const {resId}=useParams()
console.log(resId,'testing')

    const fetchData=async()=>{

        const response=await fetch('https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.6339793&lng=74.8722642&restaurantId='+resId)
        const data=await response.json()
        const categorySelection =data?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c)=>c?.card?.card?.['@type']==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
        console.log(data?.data)
        setCategories(categorySelection)
        setResData(data?.data)
    }

    useEffect(()=>{
         fetchData()
    },[])
    if(Object.keys(resData).length === 0){  
    return <Skelton/>}

  if(resData?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ){
   

    const {name,cloudinaryImageId,cuisines,costForTwoMessage}=resData?.cards[0]?.card?.card?.text
    return <div className="m-4   flex flex-col align items-center ">
         <h1 className="font-bold">{name}</h1>
        <h2>{cuisines}</h2>
        <h2>{costForTwoMessage}</h2>
        <h2>Menu</h2>

        {categories?.map((item,rank)=>  <RestaurantFoodCategory key={item?.card?.info?.id} item={item}  showItems={rank===index} setIndex={()=>setIndex(rank)}/>)}
    </div>}
}

export default RestaurantMenu