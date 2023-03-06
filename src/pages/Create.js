import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"

export default function Create(){
    // const [form, setForm] = 



    function handleSubmit(){
    //     fetch("https://ih-beers-api2.herokuapp.com/beers/new", {
    //     method: "POST", // or 'PUT'
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    // })
    // .then((response) => response.json())
    // .then((data) => {
    // console.log("Success:", data);
    // })
    // .catch((error) => {
    // console.error("Error:", error);
    // });
    }

    return(
        <>
        <Navbar/>
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Name</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" name="name"/>
        <label for="exampleFormControlInput1" class="form-label">Tagline</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" name="tagline"/>
        </div>
        <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="description"></textarea>
        <label for="exampleFormControlInput1" class="form-label">First Brewed</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" name="first_brewed"/>
        <label for="exampleFormControlInput1" class="form-label">Brewers Tips</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" name="brewers_tips"/>
        <label for="exampleFormControlInput1" class="form-label">Attenuation Level</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" name="attenuation_level"/>
        <label for="exampleFormControlInput1" class="form-label">Contributed by</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" name="contributed_by"/>
        <Link to="/"><button className="btn btn-primary mt-2">Submit</button></Link>
        </div>
        </>
    )
}