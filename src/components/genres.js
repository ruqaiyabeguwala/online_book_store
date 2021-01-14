import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import GenreCard from "./genreCard";
import dImage from "./../img/Drama.svg"
import ficImage from "./../img/Fiction.svg"
import humourImage from "./../img/Humour.svg"
import polImage from "./../img/Politics.svg"
import philImage from "./../img/Philosophy.svg"
import hisImage from "./../img/History.svg"
import adImage from "./../img/Adventure.svg"

//Array which consists of all genres names and their thumbnail
let genreDetails=[
    {name:"Fiction", src:ficImage},
    {name:"Drama", src:dImage},
    {name:"Humour", src:humourImage},
    {name:"Politics", src:polImage},
    {name:"Philosophy", src:philImage},
    {name:"History", src:hisImage},
    {name:"Adventure", src:adImage},

]

//This module helps in mapping thorugh all genres with respective thumbnail
export default function Genres() {
    return (
        <div className="genre">
            <div className="row">
                
                   {genreDetails.map(detail=>{
                     return  <div className="col col-sm-6" key={detail.name}>
                       <GenreCard category={detail.name} src={detail.src}/>
                       </div>     
                         
                   })}
            </div>
           
        </div>
    )
}
