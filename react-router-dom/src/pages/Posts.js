import React from "react";
import {Link} from "react-router-dom";

function Posts() {
    return (
        <div className="d-flex justify-content-center mt-3">
            <Link to="/posts/1" className="btn btn-primary">Post-1</Link>
            <Link to="/posts/2" className="btn btn-success mx-2">Post-2</Link>
            <Link to="/posts/3" className="btn btn-danger">Post-3</Link>
        </div>
    );
}

export default Posts;
