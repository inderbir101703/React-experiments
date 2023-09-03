
import {useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import useFetchData from '../../utils/useFetchData'
import useOnlineStatus from '../../utils/useOnline'
import Skelton from "../skelton"
import DishCard,{PromotedCard} from "../Dishcard"

const Body=()=>{
    const [restaurantList,setRestaurantList]=useState([])
    const  [filteredList,setFilteredList]=useState([])
    const [inputValue,setInputValue]=useState('')
    const PromotedDishCard=PromotedCard(DishCard)
 
    const data=useFetchData()
    const onlineStatus=useOnlineStatus()

        useEffect(()=>{
            setRestaurantList(data)
            setFilteredList(data)
},[data])
       
      
    if(restaurantList?.length===0)
    return <Skelton/>
  
    if(!onlineStatus)
    return <p>please check your connnecton</p>

        return <><div className='flex m-4'>
         <button className='bg-green-100 m-3 px-3 py-2 rounded-lg' onClick={()=>{
            setRestaurantList(restaurantList.filter((ele)=>ele.info.avgRating>4))
        }}>Top rated restaurants</button>
      
           <form className='ml-8' onSubmit={(e)=>{e.preventDefault()
          e.preventDefault()
          setFilteredList(restaurantList.filter((ele)=>!!ele.info.name.toLowerCase().match(inputValue.toLowerCase())))
        }}> 
            <input name="searchButton"type='text' className='border border-solid border-black m-2 py-1 ' value={inputValue} onChange={(e)=>setInputValue(e.target.value)} placeholder='search'/>
            <button type='submit' className='bg-green-100 m-3 px-3 py-2 rounded-lg'>Search</button>
    </form>
    </div>
        <div className='flex flex-wrap justify-center'> 
            {
            filteredList?.map((ele)=>{ 
            return   ele?.info?.promoted ? <PromotedDishCard key={ele?.info?.id} info={ele?.info}/>: <Link key={ele?.info?.id} to={`restaurant/`+ele?.info?.id}><DishCard  info={ele.info}/></Link>})
        }
    
        
        
        </div>
        </>
    
    }

    export default Body