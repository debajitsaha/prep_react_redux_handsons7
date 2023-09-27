import React from 'react'
import {NavLink, BrowserRouter,Routes,Route} from 'react-router-dom'

function RouteCompo() {
  return (
    <div>
        <BrowserRouter>
       <NavLink to={"/"}>Home</NavLink>
       <NavLink to={"/student"}>Student</NavLink>
       <NavLink to={"/contact"}>Contact</NavLink>
        <Routes>
            <Route path={"/"} element={"<Home/>"}></Route>
            <Route path={"/student"} element={"<Student/>"}></Route>
            <Route path={"/contect"} element={"<Contact/>"}></Route>
            <Route path={"/editstudent"} element={"<EditStudent/>"}></Route>
            <Route path={"/newstudent"} element={"<NewStudent/>"}></Route>
        </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default RouteCompo
