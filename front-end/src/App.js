import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Footer from './components/footer';
import Signup from './components/Signup';
import PrivateComponent from './components/PrivateComponenet';
import Login from './components/login'; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>

          <Route element={<PrivateComponent/>}>
            <Route path='/' element={<h1>Product Lisiting Componenet</h1>}></Route>
            <Route path='/add' element={<h1>add Lisiting Componenet</h1>}></Route>
            <Route path='/update' element={<h1>Update Lisiting Componenet</h1>}></Route>
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
