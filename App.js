
import React, {Suspense,lazy} from 'react'
import ReactDOM   from 'react-dom/client'
import Header from './src/Components/Header'
import About from './src/Components/About'
import Body from './src/Components/Body/Body'
import Error from './src/Components/Error'
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom'



const GroceryCom=lazy(()=>import('./src/Components/Grocery'))
const RestaurantMenu=lazy(()=>import('./src/Components/RestaurantMenu'))

const App=()=>{

    return  <> <Header/>
    <Outlet/> {/** it acts as tunnel and put children here like body about   */} 
    </>
  
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

