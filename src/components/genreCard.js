import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import next from "./../img/Next.svg";
import { withRouter} from "react-router"

//this module helps rendering a Genre card, redirect to /:category(Books component) on click. 
 function GenreCard({category,src,history}) {
    return (
        <div className="genreCard" onClick={()=> history.push(`/${category}`)}>
             <img src={src} alt={category} />
          {category}
          <img src={next} alt="back" width="20px" height="20px" className="img img-responsive" style={{float:"right"}}/>
        </div>
    )
}

export default withRouter(GenreCard)
