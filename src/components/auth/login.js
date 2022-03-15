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
            email : 'muthu@gmail.conm',
            phone : '8940749654'
        });

        localStorage.setItem('user', user);
        localStorage.setItem('isAuthenticated', true);
        dispatch(AuthActions.login());
        navigate('/');
    }

    return(
        <div className="card">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="form-box">
                    <h4 className="text text-center">Login</h4>
                    <form  method="post" onSubmit={loginHandler}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input className="form-control" id="email" type="text" name="email" placeholder="Enter Email" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input className="form-control" id="password" type="password" name="password" placeholder="Enter Password" />
                        </div> 

                        <div className="form-group">
                            <br />
                                <Button variant="contained" type="submit">Login</Button>
                            <br />
                        </div>
                    </form>
                </div> 
            </div>
        </div>
        </div>
    );
}