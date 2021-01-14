
import './../App.css';
import Genres from "./genres"

//This module lets us print the title and different genres
function Dashboard() {
  return (
    <div>
    <div className="title">
    <h1>Gutenberg Project</h1>
    A social cataloging website that allows you to freely search its database of books, annotations and reviews.
    </div>
    <Genres/>
    </div>
  );
}

export default Dashboard;
