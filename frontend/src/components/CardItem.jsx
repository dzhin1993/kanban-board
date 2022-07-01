import React, {Component} from 'react';

export class CardItem extends Component {
    render() {
        return (
            <div className="card mb-3 bg-light">
                <div className="card-body p-3">
                    <h5 className="card-title text-muted">Title</h5>
                    <p>Test text</p>
                    <a className="btn btn-outline-primary btn-sm" href="#">View</a>
                </div>
            </div>
        );
    }
}