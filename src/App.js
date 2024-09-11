import React from 'react'
import Home from './Component/Home'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from './Component/Login'
import Register from './Component/Register'
import About from './Component/About';
import Admin from './Component/Admin';
import Contact from './Component/Contact';
import Private from './Component/Private';
import AuthorPage from './Component/AuthorPage';
import Category from './Component/Category';
import Privateuser from './Component/Privateuser';
import Userauthor from './Component/Userauthor';
import Usercategory from './Component/Usercategory';
import Card from './Component/card';
import Book from './Component/Book';
import Allbook from './Component/Allbook';
import Authordatapage from './Component/Authordatapage';
import Categorydatapage from './Component/Categorydatapage';
import Userallbook from './Component/Userallbook';
import Userauthordata from './Component/Userauthordata';
import Usercategorydata from './Component/Usercategorydata';
import Cart from './Component/Cart';
import { CartProvider } from './Component/CartContext';
import CustomerId from './Component/CustomerId';
import PaymentForm from './Component/PaymentForm';
import Buybook from './Component/Buybook';
import Mybook from './Component/Mybook';



const App = () => {
  return (
    <CartProvider>
    <div>



      <Router>


        <Routes>


          <Route element={<Private />}>
            <Route path='/admin' element={<Admin />} />
            <Route path='/authorpage' element={<AuthorPage />} />
            <Route path='/category' element={<Category />} />
            <Route path='/allbook' element={<Allbook />} />
            <Route path='/authordatapage/:token' element={<Authordatapage />} />
            <Route path='/categorydatapage/:token' element={<Categorydatapage />} />
          </Route>

          <Route element={<Privateuser />}>
            <Route path='/userauthor' element={<Userauthor />} />
            <Route path='/usercat' element={<Usercategory />} />
            <Route path='/userallbook' element={<Userallbook />} />
            <Route path='/Userauthordata/:token' element={<Userauthordata />} />
            <Route path='/Usercategorydata/:token' element={<Usercategorydata />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/CustomerId' element={<CustomerId />} />
            <Route path='/Payment' element={<PaymentForm />}/>
            <Route path='/buybook/:token' element={<Buybook />} />
            <Route path='/mybook' element={<Mybook />}/>
          </Route>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/card' element={<Card />} />
          <Route path='/book' element={<Book />} />
        </Routes>.
      </Router>
    </div>
    </CartProvider>
  )
}




export default App

