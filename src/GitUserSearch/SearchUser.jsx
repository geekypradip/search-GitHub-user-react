import { useState } from "react";
import styles from'./git.module.css'
function SearchUser({getValue}) {
    const [searchValue, setSearchValue]=useState("");
    function handleChange(e){
        setSearchValue(e.target.value)
    }
    return ( 
        <div className={styles.searchHolder}>
            <input type="text" placeholder="search user for github" value={searchValue} onChange={(e)=>handleChange(e)}/>
            <button onClick={()=>getValue(searchValue)}>Search</button>
        </div>
     );
}

export default SearchUser;