import beers from "../assets/beers.png"
import newBeer from "../assets/new-beer.png"
import randomBeer from "../assets/random-beer.png"
import { Link } from "react-router-dom"

export default function Home(){
    return(
<>
  <div class="card mb-3">
  <img src={beers} class="card-img-top" alt="..."/>
  <div class="card-body">
    <Link to="/beers"><h5 class="card-title">All Beers</h5></Link>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  </div>
</div>  
<div class="card mb-3">
  <img src={newBeer} class="card-img-top" alt="..."/>
  <div class="card-body">
  <Link to="beers/random-beer"><h5 class="card-title">Random Beer</h5></Link>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  </div>
</div>  
<div class="card mb-3">
  <img src={randomBeer} class="card-img-top" alt="..."/>
  <div class="card-body">
  <Link to="beers/new-beer"><h5 class="card-title">New Beer</h5></Link>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  </div>
</div>  


</>
    )
}