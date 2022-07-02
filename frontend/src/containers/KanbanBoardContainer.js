import React, {Component} from 'react';
import axios from "axios";

import {CardsColumn} from "../components/CardsColumn";
import {AddOrUpdateModal} from "../components/AddOrUpdateModal";

export class KanbanBoardContainer extends Component {

    state = {
        showModal: false,
        items: [],
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/api/items`)
            .then(res => {
                const items = res.data;
                this.setState({ items });
            })
    }

    openModal = () => {
        this.setState(() => ({
            showModal: true,
        }))
    };

    closeModal = () => {
        this.setState(() => ({
            showModal: false,
        }))
    }

    render() {
        return (
            <main className={"content"}>
                <AddOrUpdateModal show={this.state.showModal} closeModal={this.closeModal} />
                <h1 className="h5 mb-3">Kanban Board</h1>
                <div className="row">
                    <CardsColumn items={this.state.items["CREATED"]} columnType="Upcoming" showModal={this.openModal} />
                    <CardsColumn columnType="In Progress" />
                    <CardsColumn columnType="On hold" />
                    <CardsColumn columnType="Completed" />
                </div>
            </main>
        )
    }
}