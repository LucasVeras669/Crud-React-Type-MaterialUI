import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Home2 } from "../pages/Home2"
import { Button } from "@mui/material"
import { useAppThemeContext } from "../shared/contexts"

export const AppRoutes = () => {
   const {toggleTheme} = useAppThemeContext()

    return (
       <BrowserRouter>
       <Routes>
        <Route path="/home" element={<Button variant="contained" color="primary" onClick={toggleTheme}>Pagina Inicial</Button>}/>
        <Route path="/home2" element={<Home2/>}/>
        <Route path="*" element={<Navigate to='/home2' />}/>
       </Routes>
       </BrowserRouter>
    )
}