import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Search({handleSearch}) {
    return (
        <div className="row">
        <div className="col col-lg-12">
            <form onSubmit={(e)=>e.preventDefault()}>
           <input type="text" className="search" placeholder="Search" onChange={(e)=> handleSearch(e.target.value || " ")}/> 
           </form>
        </div>
        </div>
    )
}
