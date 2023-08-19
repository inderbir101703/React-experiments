import { Link } from 'react-router-dom'
import { CDN_URL } from '../../utils/constants'
import './styles.css'
 const DishCard=({info})=>{
  
    const {name,cuisines,avgRating,sla, cloudinaryImageId}=info
    console.log(info,'testing')
    return <div className='dishcard' key={info?.key}>

 <img src={CDN_URL+cloudinaryImageId}/>
 <Link to={`restaurant/`+info?.id}> {name}</Link>
 <span>{cuisines}</span>
 <span> {avgRating}</span>
<span>{sla.deliveryTime}</span>
    </div>
}
export default DishCard