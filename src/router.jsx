import { Link } from "react-router-dom"
function Router(){
    return(
        <>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/login">login</Link>
        </>
    )
}
export default Router