import Header from './components/layouts/header';
// import Header from './components/layouts/header2';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Products from './components/products';
import Tasks from './components/tasks';
import Test from './components/test';
import Profile from './components/profile';
import Home from './components/home';
import Home2 from './components/NewCounter';
import Login from './components/auth/login';
import InfinitePagenation from './components/infinite-pagenation';
import './index.css';
import { axiosReqResLoader } from './utils/helpers';
import { useEffect } from 'react'; 

function App() {
  useEffect(() => { axiosReqResLoader() }, []); 
  
  return (
    <div className="bg-light"> 
        <BrowserRouter> 
           <Header />
          <div className="card mt-5">
            <div className="col-md-12 d-flex justify-content-center">
                <div className="col-md-8 m-3">
                  <Routes>
                    <Route path='/' element={<Home/>} /> 
                    <Route path='/home2' element={<Home2/>} /> 
                    <Route path='/products' element={<Products/>} /> 
                    <Route path='/profile' element={<Profile/>} />
                    <Route path='/tasks' element={<Tasks/>} />
                    <Route path='/test' element={<Test/>} />
                    <Route path='/infinite-scroll' element={<InfinitePagenation/>} />
                    <Route exact path='/login' element={<Login/>} />
                  </Routes>
              </div>
            </div>
          </div>
        </BrowserRouter> 
    </div>
  );
}

export default App;
