import React from 'react'

//helps in rendering a book and display the content of book on click
export default function bookCard({book}) {
    //concetenate author names 
    function getAuthors(){
        return book.authors.reduce((total,val)=>total!==""?total+" | "+val.name:val.name,"")
    }
    //filter the book formats with given type
    function findFormat(type){
        let formats= Object.keys(book.formats).filter((format=>format.includes(type)))
        return formats.length?formats:null
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
