import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [searchText, setSearchText] = useState("")
  const[sugestions,setSugestions] =useState("")
  useEffect(()=>{
    const fetch=()=>{
      if(searchText.trim()===""){
        setSugestions([])
        return;
      }
    }
    fetch('https://dummyjson.com/users/search?q=John')
    .then(res => res.json())
     .then((data)=>{
      setSearchText(data)
     })
     .catch((err)=>{
       console.log(err)
     })
  },[searchText])

  return (
    <>
      <div className='searchFilter'>
        {/* {pills} */}
        {/* {input} */}
        <input
         type='text'
        placeholder='type name' 
        value={searchText} 
        onChange={(e)=>setSearchText(e.target.value)}></input>
      </div >
      <div className='sugestion-list'>
        {sugestions?.users?.map((user,index)=>{
          return <li key={user.email}>
             <img src={user.img} alt={` ${firstname} ${lastname}`}> </img>
             <span>{firstname} {lastname}</span>
             </li>
        })}
         </div>
        
    </>
  )
}

export default App
