
import { CDN_URL } from '../../utils/constants'
 const DishCard=({info})=>{
  
    const {name,cuisines,avgRating,sla, cloudinaryImageId}=info

    return <div className='m-4 p-4 w-[300px] rounded-lg flex flex-col bg-gray-100 hover:bg-gray-300' >

 <img className='h-[200px] rounded-lg' src={CDN_URL+cloudinaryImageId}/>
<span className='font-bold text-lg py-4'>{name}</span>
 <span className='break-words'>{cuisines.join(',')}</span>
 <span> {avgRating}</span>
<span>{sla.deliveryTime}</span>
    </div>
}
export default DishCard


//higher order component is used to enchance a function and return it 
export const  PromotedCard=(DishCard)=>{
    return ({info})=>
        <div className='flex flex-col' ><label className='absolute bg-black rounded-lg text-white m-2 p-2'>Promoted</label>    
        <DishCard info={info}/></div>
    
}