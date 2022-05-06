import Header from './components/layouts/header';
// import Header from './components/layouts/header2';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Products from './components/products';
import Tasks from './components/tasks';
import Profile from './components/profile';
import Home from './components/home';
import Login from './components/auth/login';
import InfinitePagenation from './components/infinite-pagenation';
import './index.css';
import { axiosReqResLoader } from './utils/helpers';
import { useEffect } from 'react';

function App() {

  useEffect(() => { axiosReqResLoader() }, []);
  
  return (
    <div className="App"> 
      <header className="App-header"> 
          <BrowserRouter> 
            <Header />
            <Routes>
                <Route path='/' element={<Home/>} /> 
                <Route path='/products' element={<Products/>} /> 
                <Route path='/profile' element={<Profile/>} />
                <Route path='/tasks' element={<Tasks/>} />
                <Route path='/infinite-pagenation' element={<InfinitePagenation/>} />
                <Route exact path='/login' element={<Login/>} /> 
                
            </Routes>
          </BrowserRouter>
      </header> 
    </div>
  );
}

export default App;
