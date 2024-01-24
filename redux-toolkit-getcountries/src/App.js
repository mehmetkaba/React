import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setLoading, getCounties, reset} from "./redux/features/countrySlice";

function App() {

    const loading = useSelector((state) => state.country.loading);
    const countries = useSelector((state) => state.country.country);
    const dispatch = useDispatch();

    const getData = () => {
        dispatch(getCounties());
    }

    return (
        <div className="container mt-2">
            <div className="d-flex justify-content-between align-items-center">
                <h2>Country List</h2>
                <div className="form-check form-switch my-auto">
                    <input onClick={() => dispatch(setLoading(!loading))} className="form-check-input shadow-none" type="checkbox" role="switch"/>
                </div>
                <div className="d-flex justify-content-end">
                    <button className="btn btn-success mx-1" onClick={getData} disabled={loading}>
                        {
                            !loading ? "Get List" :
                                <div className="spinner-border spinner-border-sm mx-3" role="status">
                                    <span className="visually-hidden"/>
                                </div>
                        }
                    </button>
                    <button className="btn btn-danger" onClick={() => dispatch(reset())} disabled={loading}>Reset</button>
                </div>
            </div>
            {
                !countries.length ?
                    <div className="alert alert-primary text-center mt-2" role="alert">
                        {
                            !loading ?
                                `Please press the "Get List" button to get the data.`
                                :
                                `Please turn on the "Switch Button".`
                        }

                    </div>
                    :
                    loading ?
                        <div className="text-center">
                            <div className="spinner-border mt-5" role="status">
                                <span className="visually-hidden"/>
                            </div>
                        </div>
                        :
                        <table className="table table-striped table-bordered border-dark mt-2">
                            <thead>
                            <tr>
                                <th className="text-center">#</th>
                                <th>Country</th>
                                <th className="text-center">Region</th>
                                <th className="text-center">Flag</th>
                            </tr>
                            </thead>
                            <tbody className="table-group-divider">
                            {
                                countries.map((country, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="text-center">{index + 1}</td>
                                            <td>{country.name.common}</td>
                                            <td className="text-center">{country.region}</td>
                                            <td className="text-center h3">{country.flag}</td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
            }
        </div>
    );
}

export default App;
