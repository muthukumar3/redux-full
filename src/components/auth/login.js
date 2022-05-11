import { useDispatch } from 'react-redux';
import { AuthActions } from '../../store/authentication'; 
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginHandler = (event) => {
        event.preventDefault();
        var user = JSON.stringify({
            name : 'Muthu kumar S',
            email : 'muthu@gmail.com',
            phone : '9787202816'
        });

        localStorage.setItem('user', user);
        localStorage.setItem('isAuthenticated', true);
        dispatch(AuthActions.login());
        navigate('/');
    }

    return(
        <div className="card">
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="form-box">
                    <h4 className="text text-center">Login</h4>
                    <form  method="post" onSubmit={loginHandler}>
                        <div className="form-group mb-2">
                            <label htmlFor="email">Email</label>
                            <input className="form-control" id="email" type="text" name="email" placeholder="Enter Email" readOnly value="muthu@gmail.com" />
                        </div>

                        <div className="form-group mb-2">
                            <label htmlFor="password">Password</label>
                            <input className="form-control" id="password" type="password" name="password" placeholder="Enter Password" readOnly value="9787202816" />
                        </div> 

                        <div className="form-group mb-3 mt-3"> 
                            <Button variant="contained" type="submit">Login</Button>
                        </div>
                        <p>Login to see all other concepts</p>
                    </form>
                </div> 
            </div>
        </div>
        </div>
    );
}