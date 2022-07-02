import React from 'react';

import {CardItem} from "./CardItem";

export const CardsColumn = ({items, columnType, showModal}) => {
    return (
        <>
            <div className="col-12 col-lg-6 col-xl-3">
                <div className="card card-border-primary">
                    <div className="card-header">
                        <h5 className="card-title">{columnType}</h5>
                        <h6 className="card-subtitle text-muted">Upcoming new tasks</h6>
                    </div>
                    <div className="card-body p-3">
                        {items && items.map(item => <CardItem key={item.id} item={item}/>)}
                        <a href="#" className="btn btn-primary btn-block" onClick={showModal}>Add new</a>
                    </div>
                </div>
            </div>
        </>
    )
};