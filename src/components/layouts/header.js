import React from 'react';
import { Link, useNavigate } from "react-router-dom"; 
import { useSelector, useDispatch } from 'react-redux';
import { AuthActions } from "../../store/authentication"; 

export default function Header() {  
  const dispatch = useDispatch(); 
    const auth = useSelector(state => state.auth);
    const navigate = useNavigate();
    
    const logoutHandler = () => {
      localStorage.setItem('user', '');
      localStorage.setItem('isAuthenticated', false);
      dispatch(AuthActions.logout());
      navigate("/login"); 
    }
    
    return(
      <>
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
              <h4 className="text text-warning">Redux Slicing</h4>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                {auth.isAuthenticated &&
                <>
                  <li className="nav-item">
                      <Link to="/products" className="nav-link">Products</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/profile" className="nav-link">Profile</Link>
                    </li>
                    <li className="nav-item">
                      <a href="#" onClick={logoutHandler} className="nav-link">Logout</a>
                    </li>
                </>
                }
                {!auth.isAuthenticated &&
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                  </li>
                }
              </ul>
            </div>
          </nav> 
        </>
    )
}