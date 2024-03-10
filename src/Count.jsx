import { useEffect } from "react";
import { useState } from "react"

export default function Count(){


    // const handlejson = () =>{

    // }

    const [user, userSet] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => userSet(data))
    } ,[])

   return (
    <div>
        <h3>User : {user.length} </h3>
    </div>
   )
}