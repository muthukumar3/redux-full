import React from "react";
import { useSelector, useDispatch } from 'react-redux';  
import { CounterActions } from '../store/counter';
import Button from '@mui/material/Button';

export default function Counter() {
    const { count, toggle } = useSelector((state) => state);
    const dispatch = useDispatch();

    const incrementHandle = () => {
        dispatch(CounterActions.increament());
    }
    const decrementHandle = () => {
        dispatch(CounterActions.decreament());
    }
    const increaseHandle = () => {
        dispatch(CounterActions.increase(3.33));
    }
    const toggleHandler = () => {
        dispatch(CounterActions.toggle());
    }
    const resetHandle = () => {
        dispatch(CounterActions.reset());
    };

    return (
        <div className="card m-3 shadow p-3 bg-body rounded">
            <div className="card-title text-center">
                <h3>Redux Slicing Concept for Counter </h3>
                <p>Footer la whats app & telegram & twitter & Linked In & Git lap links kudukanum</p>
            </div>
            <div className="card-body">
                <Button variant="contained" size="medium" onClick={incrementHandle} className="ml-2">Increment</Button> &nbsp;
                <Button variant="outlined" size="medium" onClick={decrementHandle}>Decrement</Button> &nbsp;
                <Button variant="contained" size="medium" onClick={increaseHandle}>Increase</Button>  &nbsp;
                <Button variant="outlined" size="medium" onClick={resetHandle}>Reset</Button> &nbsp;
                <Button variant="contained" onClick={toggleHandler}>{!toggle && 'Show' } {toggle && 'Hide'}</Button>
            </div>
            <div className="card-title text-center">
                <h3>{toggle && <p>Current Value : {count}</p> }</h3>
            </div>
        </div>
    )
}