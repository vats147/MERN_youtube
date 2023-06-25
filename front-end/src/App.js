import logo from './logo.svg';
import './App.css';
import Nav from './nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<h1>Product Lisiting Componenet</h1>}></Route>
        <Route path='/add' element={<h1>add Lisiting Componenet</h1>}></Route>
        <Route path='/update' element={<h1>Update Lisiting Componenet</h1>}></Route>
        <Route path='/logout' element={<h1>logout Lisiting Componenet</h1>}></Route>
        <Route path='/profile' element={<h1>profile Lisiting Componenet</h1>}></Route>
         </Routes>
      <h1>E-Dashboard</h1>
      </BrowserRouter>
    </div>
  );
}

export default App;
