import { BrowserRouter, Routes, Route } from "react-router-dom"
import AboutPage from "../pages/about"
import HomePage from "../pages/home";

const AppRoutes = () => {
    return (
        
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<HomePage />} />

                {/* <Route path="/about" element={<AboutPage />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;