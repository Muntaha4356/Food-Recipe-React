import { Route, Routes} from "react-router-dom";
import Router from "./router";
import Mainpage from "./component/mainpage";
import Mealinfo from "./component/Mealinfo";
import Favpage from "./component/Favpage";
import Video from "./component/video";
import About from "./component/About";
import Contact from "./component/contact";


function App() {
  // const router= createBrowserRouter([
  //   {
  //     path: "/",
  //     element:<><Router/><Home/></>
  //   },
  //   {
  //     path:"/login",
  //     element:<><Router/><login/></>
  //   },
  //   {
  //     path:"/about",
  //     element:<><Router/><about/></>
  //   },
  // ])

  return (
    <>
      
        
        <Routes>
          <Route path="/" element={<Mainpage />}/>
          <Route path='/:mealid' element={<Mealinfo/>}/>
          <Route path="/favorite" element={<Favpage/>}/>
          {/* <Route path="/favorite:mealid" element={<Favpage/>}/> */}
          <Route path="/video" element={<Video/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/review" element={<Contact/>}/>
        </Routes>
      
    </>
  )
}

export default App
