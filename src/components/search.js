import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Search({handleSearch,books}) {
    const [typeState, setTypeState] = React.useState({name: '',
    typing: false,
    typingTimeout: 0})

    function handleChange(e){
        if (typeState.typingTimeout) {
            clearTimeout(typeState.typingTimeout);
         }
       
         setTypeState({
            name: e.target.value,
            typing: false,
            typingTimeout: setTimeout(function () {
                handleSearch(e.target.value || " ")
              }, 500)
         }); 
    }
    return (
        <div className="row">
        <div className="col col-lg-12">
            <form onSubmit={(e)=>e.preventDefault()}>
           <input type="text" className="search" placeholder="Search" onChange={handleChange}/> 
           </form>
        </div>
        </div>
    )
}
