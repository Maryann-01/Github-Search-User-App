import {Routes,Route} from "react-router-dom"
// import AvailableUsers from "./availableUsers"
import DisplayDetails from "./components/displayDetails" 
// import {FaMoon,FaSun,FaSearch} from "react-icons/fa";
import Home from "./components/Home"
import ErrorPage from "./components/ErrorPage"
import './App.css'
function App() {
  return (
   <Routes>
     <Route index path="/" element={<Home/>}/>
     <Route path="displayDetails" element={<DisplayDetails/>}/>
     <Route path='*' element={<ErrorPage />} />
   </Routes>
  )
  
}

export default App
