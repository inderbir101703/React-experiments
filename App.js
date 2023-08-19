
import React from 'react'
import ReactDOM   from 'react-dom/client'
import Header from './src/Components/Header'
import About from './src/Components/About'
import Body from './src/Components/Body/Body'
import Error from './src/Components/Error'
import RestaurantMenu from './src/Components/RestaurantMenu'
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom'




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
},{
    path:'/about',
    element:<About/>
},{
    path:'/restaurant/:resId',
    element:<RestaurantMenu/>
}],
    errorElement:<Error/>
}
])
const root=  ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)

