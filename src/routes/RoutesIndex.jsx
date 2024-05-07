import {Routes, Route} from 'react-router-dom'
import Home from "../pages/Home"
import Error from "../pages/Error/Error"
import Trainers from "../pages/Trainers/Trainers"

const RoutesIndex = () => {
  return (
    <Routes>
        <Route path='/' element= {<Home />}/>
        <Route path='/trainers' element= {<Trainers />}/>
        <Route path='*' element= {<Error />}/>
    </Routes>
  )
}

export default RoutesIndex