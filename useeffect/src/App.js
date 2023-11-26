import React, {useState, useEffect} from 'react';

function App() {

    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(0);
    const [bool, setBool] = useState(false);

    // Sayfa ilk yüklendiğinde bir kez çalışır.
    useEffect(() => {
        setTimeout(() => {
            setValue1(value1 + 9);
        }, 3000)
    }, []);

    // Hem sayfa ilk yüklengiğinde hem de state setlendiğinde çalışır.
    useEffect(() => {
        setTimeout(() => {
            setValue2(value2 + 1);
        }, 1000)
    });

    // bool değiştiğinde çalışır.
    useEffect(() => {
        setValue3(value3 + 1);
    }, [bool]);

    return (
        <React.Fragment>
            <div className="d-flex justify-content-around align-items-center vh-100 text-center bg-secondary-subtle bg-gradient">
                <div>
                    <h1>{value1}</h1>
                </div>
                <div>
                    <h1>{value2}</h1>
                </div>
                <div>
                    <h1>{value3}</h1>
                    <button className="btn btn-success px-4" onClick={() => {setBool(!bool)}}>Click</button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default App;