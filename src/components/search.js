import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Search({handleSearch}) {
    // to manage the typing state
    const [typeState, setTypeState] = React.useState({name: '',typing: false,typingTimeout: 0})

    //Waits for 500 miliseconds after we finish typing and then call API.
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
