import { useState } from "react";
import SearchUser from "./SearchUser";
import User from "./user";
import axios from "axios"
function Git() {
    const [users,setUsers]= useState([]);
    function hello(searchValue){
    if(!searchValue)
    alert("please enter something!");
    else{
        // using fetch method
       /* fetch(`https://api.github.com/search/users?q=${searchValue}&per_page=10`)
                    .then((res)=>{
                        return res.json();
                    })
                    .then((res)=>{
                        // console.log(res.items)
                       setUsers(res.items)
                    }).catch((e)=>{
                        console.log(e)
                    })*/

                    // using axios method
        axios.get(`https://api.github.com/search/users?q=${searchValue}&per_page=20`)
        .then(function (response) {
          // handle success
          console.log(response);
          setUsers(response.data.items)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    }
}

    return (  
        <div> 
            <SearchUser getValue={hello}/>
            <User dataArray={users}/>
        </div>
       
    );
}

export default Git;