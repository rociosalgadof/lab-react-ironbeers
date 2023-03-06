import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"

export default function Beers(){
    const [isLoading, setIsLoading] = useState(true)
    const [beers, setBeers] = useState(0)

    useEffect(()=>{
        fetch("https://ih-beers-api2.herokuapp.com/beers")
        .then((response) => response.json())
        .then((data) => setBeers(data));
    },[])

    useEffect(()=>{
        setIsLoading(false)
    },[beers])


    return(
    <>
    <Navbar/>
    <div className="cardsCont">
    {beers && beers.map((item)=>{
        return (
            <div class="card mb-3" style={{maxWidth: "300px", border: "0", justifyContent: "flex-start", marginRight:"0px"}}>
            <div class="row g-0">
            <div class="col-md-4">
              <Link to={`/beers/${item._id}`}><img src={item.image_url} class="img-fluid rounded-start" alt="..."/></Link>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
                <p class="card-text"><small class="text-muted">{item.tagline}</small></p>
                <p class="card-text">{item.contributed_by}</p>  
              </div>
            </div>
          </div>
        </div>
        )
    })}
    </div>
    </>
    )
}