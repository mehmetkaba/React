import React, {useState} from 'react';

function App() {

    const [number, setNumber] = useState(0);

    const increment = () => {
        setNumber(number + 1);
    }

    const decrement = () => {
        setNumber(number - 1);
    }

    return (
        <React.Fragment>

            <div
                className="container-fluid bg-gradient bg-secondary-subtle d-flex justify-content-center align-items-center vh-100">
                <div className="text-center">
                    <h1>{number}</h1>
                    <div>
                        <button onClick={decrement} className="btn btn-danger me-1">Decrement</button>
                        <button onClick={increment} className="btn btn-success">Increment</button>
                    </div>
                </div>
            </div>


        </React.Fragment>
    );
}

export default App;
