import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from "../stores";

export default function NewCounter() {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch(counterActions.increase());
    }
    console.log(counter);
    
    const increaseHandler = () => {
        dispatch(counterActions.increase(13));
    }

    return (
        <>
            <button onClick={incrementHandler}> Increment </button>
            <button onClick={increaseHandler}> Increase </button>
            Counter Value :  {counter} 
        </>
    )
}