import React, { useState } from "react";
import RestaurantItemList from "./RestaurantItemList";

const RestaurantFoodCategory=({key,item,showItems,setIndex})=>{

console.log('testing')
    const handleClick=()=>{setIndex()}
   const {title,itemCards}=item?.card?.card
    return <div key={key} className="m-2 p-2 w-1/2 shadow-lg bg-gray-200 border rounded-lg flex flex-col items-center " >
        <div className="flex justify-between w-full cursor-pointer" onClick={handleClick}>
     <span className="text-lg font-bold">{title}({itemCards?.length})</span>
     <span> ↓</span>
     </div>

     {showItems&&<RestaurantItemList itemsList={itemCards}/>}
    </div>
}
export default RestaurantFoodCategory