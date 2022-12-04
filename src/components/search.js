import React, { useEffect, useState } from "react";
import '..//App.css'

function Search(){
    const [id,setId]=useState(1)
    const [post,setPost]=useState({})

    const BASE_URL='https://flightglossaryapi.travix.com/NL/airports?search'

    useEffect(()=>{
        fetch(`{BASE_URL}${id}`)
        .then((res)=>{res.json()

        })
    },[id])

   return(
    <div className="Search">
    <input type="text"
    placeholder="enter value"
    value={id}
    onChange={(e) => setId(e.target.value)}
    />
    <div>{id.code}</div>
</div>
   )
}

export default Search;