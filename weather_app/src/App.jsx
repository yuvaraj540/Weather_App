import { BrowserRouter,Routes,Route } from "react-router-dom";

//Pages
import  LandingPage  from './component/Pages/LandingPage/LandingPage';
import  WeatherPage  from './component/Pages/WeatherPage/WeatherPage';

//import './App.css'

function App() {

  

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path = '/' element = { <LandingPage/> }/>
            <Route path = '/weatherPage' element = { <WeatherPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
