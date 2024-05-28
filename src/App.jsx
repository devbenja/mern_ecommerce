import { Footer } from "./components/Footer/Footer.jsx";
import NavBar from "./components/Navigation/NavBar";
import { Product } from "./components/Products/Product.jsx";
import { HomePage } from "./pages/Home/HomePage.jsx";
import { Routes, Route } from "react-router-dom";


export const App = () => {
  return (
    <>
      <NavBar/>
      <Routes>
       <Route path="/" element={<HomePage/>}/> 
       <Route path="/men_shirts" element={<Product/>}/>
      </Routes> 
      <Footer/>
    </>
  )
}

