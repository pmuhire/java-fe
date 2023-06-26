import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import ShoppingCart from './pages/ShoppingCart'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
      {/* <Navbar /> */}
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/shopping-cart" exact element={<ShoppingCart />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
