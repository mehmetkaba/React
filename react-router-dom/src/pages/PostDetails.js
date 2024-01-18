import React from "react";

function PostDetails() {
    return (
        <div className="d-flex justify-content-center mt-3">
        <div className="card text-center">
            <div className="card-header d-flex justify-content-between align-items-center">
                <span>Post Detail</span>
                <span className="badge rounded-pill text-bg-primary text-white bg-gradient opacity-75">2 days ago</span>
            </div>
            <div className="card-body">
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci explicabo illum sit voluptate?</p>
            </div>
            <div className="card-footer text-body-secondary d-flex justify-content-end">
                <button className="btn btn-primary btn-sm px-3 me-1">Edit</button>
                <button className="btn btn-danger px-3 btn-sm">Delete</button>
            </div>
        </div>
        </div>
    );
}

export default PostDetails;
