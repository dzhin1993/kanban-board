import React, {Component} from 'react';
import axios from 'axios';

import {CardsColumn} from "../components/CardsColumn";

export class KanbanBoardContainer extends Component {

    state = {
        cards: [],
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/api/items`)
            .then(res => {
                const cards = res.data;
                this.setState({ cards });
            })
    }

    render() {
        return (
            <main className={"content"}>
                <h1 className="h5 mb-3">Kanban Board</h1>
                <div className="row">
                    <CardsColumn initialState={this.state.cards["CREATED"]} columnType="Upcoming" />
                    <CardsColumn initialState={this.state.cards["IN_PROGRESS"]} columnType="In Progress" />
                    <CardsColumn initialState={this.state.cards["ON_HOLD"]} columnType="On hold" />
                    <CardsColumn initialState={this.state.cards["COMPLETED"]} columnType="Completed" />
                </div>
            </main>
        )
    }
}