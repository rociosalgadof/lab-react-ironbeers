import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"

export default function BeerDetail(){
    let {id} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [beer, setBeer] = useState(0)

    useEffect(()=>{
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        .then((response) => response.json())
        .then((data) => setBeer(data));
    },[])

    useEffect(()=>{
        setIsLoading(false)
    },[beer])
    return(
        <>
        <Navbar/>
        {beer && <div class="card mb-3 align-items-center">
             <img src={beer.image_url} class="card-img-top" alt="..." style={{maxWidth: "175px"}}/>
             <div class="card-body">
             <h5 class="card-title">{beer.name}</h5>
             <small class="text-muted" style={{display:"flex", justifyContent:"space-between"}}>{beer.attenuation_level}</small>
             <p class="card-text">{beer.description}</p>
             <p class="card-text">{beer.contributed_by}</p>
             <p class="card-text" ><small class="text-muted" style={{display:"flex", justifyContent:"space-between"}}>{beer.tagline}<span>{beer.first_brewed}</span></small></p>
        </div>
        </div>}
        </>
    )
}
