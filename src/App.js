import './App.css';
import Home from "./pages/Home"
import {Routes, Route} from "react-router-dom"
import Beers from './pages/Beers';
import BeerDetail from './pages/Beer.detail';
import Random from "./pages/Random"
import Create from './pages/Create';


function App() {
  return (
   <div className="container" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/beers' element={<Beers/>}/>
      <Route path='/beers/:id' element={<BeerDetail/>}/>
      <Route path='/beers/random-beer' element={<Random/>}/>
      <Route path='/beers/new-beer' element={<Create/>}/>
    </Routes>
   </div>
  );
}

export default App;
