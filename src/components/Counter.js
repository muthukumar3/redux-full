import React from "react";
import { useSelector, useDispatch } from 'react-redux'; 
import { counterActions } from '../store/index'; 

export default function Counter() {
    const count = useSelector(store => store);
    const dispatch = useDispatch();
    console.log(count);

    const incrementHandler = () => {
        dispatch(counterActions.increament());
    }
    const decrementHandler = () => {
        dispatch(counterActions.decreament());
    }
    const increaseHandler = () => {
        dispatch(counterActions.increase({
            amount : 10
        }));
    }
    const toggleHandler = () => {
        dispatch(counterActions.toggle());
    }

    return (
        <>
            <main className="container">
                <h1>Redux Using Counter</h1>
                <button className="btn btn-primary m-1 " onClick={incrementHandler}>INC</button>
                <button className="btn btn-primary m-1 " onClick={decrementHandler}>DEC</button>
                <button className="btn btn-primary m-1 " onClick={increaseHandler}>Increase 5</button>
                <button className="btn btn-primary m-1 " onClick={toggleHandler}>SH</button>
                <p>Current Value : {count}</p>
            </main> 
        </>
    )
}