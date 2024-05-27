import { Footer } from "./components/Footer/Footer.jsx";
import NavBar from "./components/Navigation/NavBar";
import { Product } from "./components/Products/Product.jsx";
import { HomePage } from "./pages/Home/HomePage.jsx";


export const App = () => {
  return (
    <>
      <NavBar/>
      {/* <HomePage/> */}
      <Product/>
      <Footer/>
    </>
    
  )
}

