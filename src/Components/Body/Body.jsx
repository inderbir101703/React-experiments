
import {useEffect,useState} from 'react'
import Skelton from "../skelton"
import DishCard from "../Dishcard"
import './styles.css'

const Body=()=>{
    const [restaurantList,setRestaurantList]=useState([])
    const  [filteredList,setFilteredList]=useState([])
    const [inputValue,setInputValue]=useState('')
        useEffect(()=>{
     const fetchData=async()=>{
            const data=await fetch('https://www.swiggy.com/mapi/homepage/getCards?lat=31.6339793&lng=74.8722642')
            const pdata=await data.json()
            setRestaurantList(pdata?.data.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
            setFilteredList(pdata?.data.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
 }
fetchData()
},[])
       
      
    if(restaurantList?.length===0)
    return <Skelton/>
    
        return <>
         <button onClick={()=>{
            setRestaurantList(restaurantList.filter((ele)=>ele.info.avgRating>4))
        }}>filter </button>
    
            <label htmlFor="searchButton">Search</label>
            <input name="searchButton"type='text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)} placeholder='search'/>
            <button type='submit' onClick={(e)=>{
                e.preventDefault()
              setFilteredList(restaurantList.filter((ele)=>!!ele.info.name.toLowerCase().match(inputValue.toLowerCase())))
             
            }}>Search</button>
    
        <div className='body'> 
            {
            filteredList?.map((ele)=>{ 
            return <DishCard key={ele?.info?.id} info={ele.info}/>})
        }
    
        
        
        </div>
        </>
    
    }

    export default Body