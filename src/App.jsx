import './App.css';
import NavBar  from './components/ItemListContainer/NavBar';
import Home from './components/ItemListContainer/Home';
import Products from './components/ItemListContainer/itemListContainer/Products';
import Product from './components/ItemListContainer/itemDetailContainer/Product';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export const App = () => {
  return(
      <>
        <NavBar />
         
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/products" element={<Products />}/>
            <Route exact path="/products/:id" element={<Product />}/>
          </Routes>
          
      </>
  )
};
export default App;
