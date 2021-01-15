import React,{useEffect,useState} from 'react'
import axios from "axios"
import data from "./../config/default.json"
import { withRouter } from 'react-router'
import BookCard from "./bookCard"
import 'bootstrap/dist/css/bootstrap.min.css';
import back from "./../img/Back.svg"
import Search from "./search"
import useInfiniteScroll from 'react-infinite-scroll-hook';
import loader from "./../img/loader.gif"

 function Books({match,history}) {
//for storing book details     
const [details, setDetails] = useState([])
//for storing next Page details
const [nextPage, setNextPage] = useState(`${data.base_url}&topic=${match.params.category}`);
//for storing the loading info
const [loading, setLoading] = useState(true)

//sends an AJAX request to respective API and update the state accordingly
async function fetchUser(searchTerm=null){
    try{
    let res;
    if(!searchTerm){
    res= await axios.get(nextPage);
    setDetails([...details, ...res.data.results])
    } 
    else{
    const searchURL= searchTerm===""?"":`&search=${encodeURI(searchTerm)}`
    res= await axios.get(`${data.base_url}&topic=${match.params.category}${searchURL}`);
    setDetails(res.data.results)
    }
   // console.log(res.data)
    setNextPage(res.data.next)
    setLoading(false)
}
catch(err){
    throw err;
}
}
//for searching a particular book
 async function handleSearch(searchTerm){ 
        setDetails([])
        setLoading(true);
        //calls to send AJAX request
        fetchUser(searchTerm) 
 }

 //to fetch data from the next page
function handleLoadMore() {
    setLoading(true);
    //call to send AJAX request
    fetchUser()
  };

useEffect(() => {
   fetchUser()
}, [match.params.category])

//maintain infinte scrolling
const infiniteRef = useInfiniteScroll({
      loading,
      hasNextPage:nextPage?true:false,
      onLoadMore: handleLoadMore,
      scrollContainer:window,
    });

//This module helps diplaying Search bar and all books and take necessary action on click
    return (
        <div>
            <div className="details">
            <img src={back} alt="go back" style={{float:"left",cursor:"pointer"}} onClick={history.goBack}/>
            <h2 >{match.params.category}</h2>
            <Search handleSearch={handleSearch}/>
            </div>

           <div className="row books">
            {!details.length && !loading?"No results found!":details.map(book=>{
                return <div className="col col-lg-2" key={book.id} ref={infiniteRef}>
                     <BookCard book={book}/>
                    </div> 
            })}
         {  loading && <img src={loader} className="loader" alt="Loading..."/>}
          
        </div>
        </div>
    )
}

export default withRouter(Books)
