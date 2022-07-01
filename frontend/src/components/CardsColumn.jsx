import React, {Component} from 'react';

import {CardItem} from "./CardItem";

export class CardsColumn extends Component {
    render() {
        return (
            <>
                <div className="col-12 col-lg-6 col-xl-3">
                    <div className="card card-border-primary">
                        <div className="card-header">
                            <h5 className="card-title">Upcoming</h5>
                            <h6 className="card-subtitle text-muted">Upcoming new tasks</h6>
                        </div>
                        <div className="card-body p-3">
                            <CardItem/>
                            <CardItem/>
                            <CardItem/>
                            <a href="#" className="btn btn-primary btn-block">Add new</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}