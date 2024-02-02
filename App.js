
import React, {Suspense,lazy, useState} from 'react'
import ReactDOM   from 'react-dom/client'
import Header from './src/Components/Header'
import About from './src/Components/About'
import Body from './src/Components/Body/Body'
import Error from './src/Components/Error'
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom'
import UserContext from './src/utils/UserContext'



const GroceryCom=lazy(()=>import('./src/Components/Grocery'))
const RestaurantMenu=lazy(()=>import('./src/Components/RestaurantMenu'))
//new data can be sent instead default only
  /**rest of the app uses iinder */
    /*header will use musk */
const App=()=>{
    return  <UserContext.Provider value={{loggedinUser:'iinder'}}> 
  
    <UserContext.Provider value={{loggedinUser:'musk'}}> 
  
    <Header/>
    </UserContext.Provider >
    <Outlet/> {/** it acts as tunnel and put children here like body about   */} 
    </UserContext.Provider >
  
}

const appRouter=createBrowserRouter([{
    path:'/',
    element:<App/>,
children:[{ /** these children will replace Outlet in App according to route.. so react is replacing children on calling and end user donot know there is a outlet */
    path:'/',
    element:<Body/>
},
{path:'/grocery',
element:<Suspense fallback={<div>loading..</div>}><GroceryCom/></Suspense>}, /*the grocery component will not loaded into single chunk . 
instead of it when someone hit grocery link it will js chunk will be made 
it makes optimized code
single chunk can take lot ot time while making the network  call
*/
{
    path:'/about',
    element:<About/>
},{
    path:'/restaurant/:resId',
    element:<Suspense fallback={<div>loading...</div>}><RestaurantMenu/></Suspense> 
}],
    errorElement:<Error/>
}
])
const root=  ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)

