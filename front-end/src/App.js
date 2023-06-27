import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Footer from './components/footer';
import Signup from './components/Signup';
import PrivateComponent from './components/PrivateComponenet';
import Login from './components/login'; 
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import UpdateProduct from './components/updateproduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>

          <Route element={<PrivateComponent/>}>
            <Route path='/' element={<ProductList/>}></Route>
            <Route path='/add' element={<AddProduct/>}></Route>
            <Route path='/update/:id' element={<UpdateProduct/>}></Route>
            <Route path='/logout' element={<h1>logout Lisiting Componenet</h1>}></Route>
            <Route path='/profile' element={<h1>profile Lisiting Componenet</h1>}></Route>
          </Route>

        <Route path='/signup' element={<Signup/>} > </Route>
        <Route path='/login' element={<Login/>} > </Route>

         </Routes>
    
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
