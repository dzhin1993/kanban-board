import React from 'react';

export const CardItem = ({card}) => {
    const {title, description} = card;
    return (
        <div className="card mb-3 bg-light">
            <div className="card-body p-3">
                <h5 className="card-title text-muted">{title}</h5>
                <p>{description}</p>
                <a className="btn btn-outline-primary btn-sm" href="#">View</a>
            </div>
        </div>
    );
};