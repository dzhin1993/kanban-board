import React, {Component} from 'react';
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'

import {CardsColumn} from "../components/CardsColumn";
import ApiService from "../services/ApiService";

export class KanbanBoardContainer extends Component {

    state = {
        cards: [],
    }

    componentDidMount() {
        ApiService.getAll()
            .then(res => {
                const cards = res.data;
                this.setState({cards});
            });
    }

    render() {
        return (
            <main className={"content"}>
                <h1 className="h5 mb-3">Kanban Board</h1>
                <DndProvider backend={HTML5Backend}>
                    <div className="row">
                        <CardsColumn initialState={this.state.cards["UPCOMING"]} columnType="UPCOMING"/>
                        <CardsColumn initialState={this.state.cards["IN_PROGRESS"]} columnType="IN_PROGRESS"/>
                        <CardsColumn initialState={this.state.cards["ON_HOLD"]} columnType="ON_HOLD"/>
                        <CardsColumn initialState={this.state.cards["COMPLETED"]} columnType="COMPLETED"/>
                    </div>
                </DndProvider>
            </main>
        )
    }
}