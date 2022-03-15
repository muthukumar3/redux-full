import React from "react";
import { useSelector, useDispatch } from 'react-redux';  
import { CounterActions } from '../store/counter';

export default function Counter() {
 
    const { count, toggle } = useSelector((state) => state.counters);
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

    return (
        <>
            <div className="card">
                <div className="card-title">
                    <h5>Counter</h5>
                </div>
                <div className="card-body">
                    <button className="btn btn-primary m-1 " onClick={incrementHandle}>Increment</button> 
                    <button className="btn btn-primary m-1 " onClick={decrementHandle}>Decrement</button> 
                    <button className="btn btn-primary m-1 " onClick={increaseHandle}>Increase</button> 
                    <button className="btn btn-primary m-1 " onClick={toggleHandler}>{!toggle && 'Show' } {toggle && 'Hide'}</button> 
                    {toggle && <p>Current Value : {count}</p> }
                </div>
            </div> 
        </>
    )
}