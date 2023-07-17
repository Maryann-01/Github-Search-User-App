import {React,useState,useEffect} from 'react'
import {FaMoon,FaSun,FaSearch} from "react-icons/fa";
const Home = () => {
    const [theme, setTheme] = useState("light")
    const[data,setData]=useState(null)
    const[input,setInput]=useState("")
    const [search,setSearch]=useState("")
    const toggleClick=()=>{
     setTheme(theme==="dark"?"light":"dark")
    }
    const url=`https://api.github.com/users/${input}`
  useEffect(()=>{
      const fetchData=async()=>{
        try{
          const response=await fetch(url)
        const data=await response.json()
       
          if(response.ok){
            setData(data)
            // console.log(data)
          }
        }
        catch(error){
          console.log(error.message)
        }
      }
      fetchData()
  },[search])
  const handleClick=(e)=>{
    e.preventDefault()
    setSearch(input)
  }
  return (
    <main className={`${theme}`}>
    <div className="theme">
      <h2>Github Finder</h2>
      <div className="themeBox" onClick={toggleClick}>
       <h3>{theme === "light" ? "LIGHT" : "DARK"}</h3>
       <div className='icon'>
         {theme==="dark"? <FaMoon/>:<FaSun/>}
       </div>
      </div>
    </div>
    <form>
    <FaSearch/>
     <input placeholder="Input Github Username" value={input} onChange={(e)=>setInput(e.target.value)}/>
     <button type="submit" onClick={handleClick}>Search</button>
    </form>
   </main>
  )
}

export default Home