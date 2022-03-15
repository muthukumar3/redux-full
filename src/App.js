import Header from './components/layouts/header';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Products from './components/products';
import Profile from './components/profile';
import Home from './components/home';
import Login from './components/auth/login'; 
import { useSelector } from 'react-redux';

function App() { 
  return (
    <div className="App">
      <header className="App-header"> 
          <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home/>} /> 
                <Route path='/products' element={<Products/>} /> 
                <Route path='/profile' element={<Profile/>} />
                <Route exact path='/login' element={<Login/>} /> 
            </Routes>
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
