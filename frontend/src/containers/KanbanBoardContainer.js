import React, {Component} from 'react';
import {CardsColumn} from "../components/CardsColumn";

import axios from "axios";

export class KanbanBoardContainer extends Component {

    state = {
        items: []
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/api/items`)
            .then(res => {
                const items = res.data;
                this.setState({ items });
            })
    }

    render() {
        return (
            <main className={"content"}>
                <h1 className="h5 mb-3">Kanban Board</h1>
                <div className="row">
                    <CardsColumn items={this.state.items["CREATED"]} columnType="Upcoming" />
                    <CardsColumn columnType="In Progress" />
                    <CardsColumn columnType="On hold" />
                    <CardsColumn columnType="Completed" />
                </div>
            </main>
        )
    }
}