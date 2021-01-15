import React from 'react'

//helps in rendering a book and display the content of book on click
export default function bookCard({book}) {
    //concatenate author names 
    function getAuthors(){
        return book.authors.reduce((total,val)=>total!==""?total+" | "+val.name:val.name,"")
    }
    //filter the book formats with given type
    function findFormat(type){
        let res=[];
        for(let format of Object.keys(book.formats)){
              if(format.includes(type) && !book.formats[format].includes(".zip") && !format.includes("zip"))
                  res.push(format)
        }
        return res.length?res:null
    }

    //find best format and helps opening the book 
    function handleClick(){
        let format=null;
        format=findFormat("html") 
        if(!format) format=findFormat("pdf")
        if(!format) format=findFormat("txt")
        if(!format) alert("No viewable version available")
        else window.open(book.formats[format[0]]) 
    }
    
    //renders book and its details to the screen
    return (
        <div className="book" onClick={handleClick}>
        <img src={book.formats["image/jpeg"]} alt="book" className="bookCard" />
            <div className="bookName">{book.title.toUpperCase()}</div>
           <div className="bookAuthor">{book.authors.length>0?getAuthors(): ""} </div>
           </div>
    )
}
