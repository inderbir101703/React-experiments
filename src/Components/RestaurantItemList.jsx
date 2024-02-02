import React from "react";
import { CDN_URL } from "../utils/constants";
const RestaurantItemList=({itemsList})=>{
 console.log(itemsList,'in list')
    return <div className=" p-2 m-2 text-left w-full" >  {itemsList.map((item)=>
    
    <div className="flex justify-between items-center border-gray-400  border-b-2 p-2">
    <div className="m-1" key={item?.card?.info?.id}>
<div>
    <span>{item?.card?.info?.name}</span>-
    <span>Rs.{item?.card?.info?.price/100}</span>
</div>
<p className="text-xs">{item?.card?.info?.description}</p>

  </div>
  <div className="wp-1 w-64  border rounded-lg">
    <div className="absolute ">  <button className="  bg-white px-1  shadow-lg border rounded-md">Add+</button></div>
  <img  src={CDN_URL+item?.card?.info?.imageId}/>
 
  </div>
  </div>)}
    </div>
}
export default RestaurantItemList