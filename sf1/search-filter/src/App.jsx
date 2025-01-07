import { useState ,useEffect} from 'react'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [suggestions,setSuggestions]=useState([])
  const [selected,setSelected]=useState([])
  const [selectedusreset,setSelecteduserset]=useState(new Set([]))
  useEffect(()=>{

    const fetchUsers=()=>{
   if(searchTerm.trim() === ""){
    setSuggestions([])
    return
   }
   fetch('https://dummyjson.com/users/search?q={searchTerm}')
  .then(res => res.json())
  .then((data)=>{
    setSearchTerm(data)
  })
  .catch((err)=>{
    console.log(err)
  })}
  },[])
  const handleSelected=(user)=>{
    setSelected([...selected,user])
    setSelecteduserset(new Set([...selected,user]))
    setSuggestions([])
    setSearchTerm('')
  }
  console.log(setSelected);
  
  return (
    <>
     
      <div id='search'>
        <input
        type='text'
        placeholder='type here'
        onChange={(e)=>{setSearchTerm(e.target.value)}}
        value={searchTerm}/>
      </div>
      <div className='search-list'>
        {suggestions?.user?.map((user)=>{
          return !(setSelecteduserset.has(user.email))(
            <li key={user.email} onChange={handleSelected}>
            <img src={user.image} alt={`${user.firstname}${user.lastname}`}>
            
            </img>
            <span>{user.firstname}{user.lastname}</span>
            
          </li>
          )
          
        })}
      </div>
       
      
    </>
  )
}

export default App
