import React from 'react';
import { Link, useNavigate } from "react-router-dom"; 
import { useSelector, useDispatch } from 'react-redux';
import { AuthActions } from "../../store/authentication";  

export default function Header() {  
  const dispatch = useDispatch(); 
    const auth = useSelector(state => state.auth);
    const navigate = useNavigate(); 
    const segments = window.location.pathname.split('/');
    console.log(segments);
    
    const logoutHandler = () => {
      localStorage.setItem('user', '');
      localStorage.setItem('isAuthenticated', false);
      dispatch(AuthActions.logout());
      navigate("/login"); 
    }
    
    return(
      <div className="fixed-top mb-3">
          <nav className="navbar navbar-expand-sm bg-primary navbar-primary" id="header">
            <div className="container-fluid">
              <h5 className="text text-white">React Concepts - POC (Proof of Work)</h5>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className={`nav-link ${segments[1] == '' ? 'active' : ''} `}>Home</Link>
                </li>
                {auth.isAuthenticated &&
                <>
                    <li className="nav-item">
                      <Link to="/infinite-pagenation" className={`nav-link ${segments[1] == 'infinite-pagenation' ? 'active' : ''} `}>Infinite Pagenation</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/products" className={`nav-link ${segments[1] == 'products' ? 'active' : ''} `}>Products</Link>
                    </li>
                    <li className="nav-item">
                      {/* <Link to="/profile" className={`nav-link ${segments[1] == 'profile' ? 'active' : ''} `}>Profile</Link> */}
                    </li>
                    <li className="nav-item">
                      <Link to="/tasks" className={`nav-link ${segments[1] == 'tasks' ? 'active' : ''} `}>Tasks</Link>
                    </li>
                    <li className="nav-item">
                      <a href="#" onClick={logoutHandler} className="nav-link">Logout</a>
                    </li> 
                </>
                }
                {!auth.isAuthenticated &&
                  <li className="nav-item">
                    <Link to="/login" className={`nav-link ${segments[1] == 'login' ? 'active' : ''} `}>Login</Link>
                  </li>
                }
              </ul>
            </div>
          </nav> 
        </div>
    )
}