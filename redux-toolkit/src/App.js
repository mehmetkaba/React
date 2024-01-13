import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement, x2, reset} from "./redux/features/counter/counterSlice";

function App() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div className="bg-gradient bg-secondary-subtle d-flex justify-content-center align-items-center vh-100">
            <div className="text-center rounded p-4" style={{backgroundColor: '#e0e0e0'}}>
                <h1>{count}</h1>
                <div>
                    <button onClick={() => dispatch(decrement())} className="btn btn-danger">Decrement</button>
                    <button onClick={() => dispatch(increment())} className="btn btn-success mx-1">Increment</button>
                    <button onClick={() => dispatch(x2(2))} className="btn btn-primary">x2</button>
                    <button onClick={() => dispatch(reset())} className="btn btn-secondary mt-1 d-block w-100">Reset</button>
                </div>
            </div>
        </div>
    )
}

export default App;