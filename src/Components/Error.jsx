import { useRouteError } from "react-router-dom"
const Error=()=>{
    const er=useRouteError()
    return <div>Opps! something went wrong
        <h2>
            {er.status}{er.statusText}
        </h2>
    </div>
}
export default Error