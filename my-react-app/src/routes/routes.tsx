import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Home2 } from "../pages/Home2"
import { Button } from "@mui/material"
import { useDrawerContext } from "../shared/contexts"

export const AppRoutes = () => {
   const {toggleDrawerOpen} = useDrawerContext()

    return (
       <BrowserRouter>
       <Routes>
        <Route path="/home" element={<Button variant="contained" color="primary" onClick={toggleDrawerOpen}>Abrir Menu</Button>}/>
        <Route path="/home2" element={<Home2/>}/>
        <Route path="*" element={<Navigate to='/home2' />}/>
       </Routes>
       </BrowserRouter>
    )
}