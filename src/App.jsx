import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import NavBar from './components/NavBar'
import CartProvider from './components/CartContext'
import Cart from './components/Cart'
import Checkout from './components/Checkout'

function App() {
  
  return (
    <>
      <CartProvider>
        <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route exact path="/" element={<ItemListContainer/>} />
          <Route exact path="/category/:id" element={<ItemListContainer/>} />
          <Route exact path="/item/:id" element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>    
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
