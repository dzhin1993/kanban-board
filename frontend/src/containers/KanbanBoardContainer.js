import React, {useEffect} from 'react';
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {useDispatch} from 'react-redux'

import {CardsColumn} from "../components/CardsColumn";
import {fetchCards} from "../actions/cardsActions";
import {UpdateForm} from "../components/UpdateForm";

export const KanbanBoardContainer = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCards());
    }, []);

    return (
        <main className={"content"}>
            <h1 className="h5 mb-3">Kanban Board</h1>
            <DndProvider backend={HTML5Backend}>
                <UpdateForm/>
                <div className="row">
                    <CardsColumn columnType="UPCOMING"/>
                    <CardsColumn columnType="IN_PROGRESS"/>
                    <CardsColumn columnType="ON_HOLD"/>
                    <CardsColumn columnType="COMPLETED"/>
                </div>
            </DndProvider>
        </main>
    );
}