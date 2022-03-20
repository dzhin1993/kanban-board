import React, {Component} from 'react';
import {CardsColumn} from "../components/CardsColumn";

export class KanbanBoardContainer extends Component {
    render() {
        return (
            <main className={"content"}>
                <h1 className="h5 mb-3">Kanban Board</h1>
                <div className="row">
                    <CardsColumn columnType="Upcoming" />
                    <CardsColumn columnType="In Progress" />
                    <CardsColumn columnType="On hold" />
                    <CardsColumn columnType="Completed" />
                </div>
            </main>
        )
    }
}