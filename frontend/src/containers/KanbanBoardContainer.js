import React, {useEffect} from 'react';
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {useDispatch, useSelector} from 'react-redux'

import {CardsColumn} from "../components/CardsColumn";
import {fetchCards} from "../actions/cardsActions";

export const KanbanBoardContainer = () => {
    const dispatch = useDispatch();
    const cards = useSelector(state => state.cards);

    useEffect(() => {
        dispatch(fetchCards());
    }, [dispatch]);

    return (
        <main className={"content"}>
            <h1 className="h5 mb-3">Kanban Board</h1>
            <DndProvider backend={HTML5Backend}>
                <div className="row">
                    <CardsColumn initialState={cards["UPCOMING"]} columnType="UPCOMING"/>
                    <CardsColumn initialState={cards["IN_PROGRESS"]} columnType="IN_PROGRESS"/>
                    <CardsColumn initialState={cards["ON_HOLD"]} columnType="ON_HOLD"/>
                    <CardsColumn initialState={cards["COMPLETED"]} columnType="COMPLETED"/>
                </div>
            </DndProvider>
        </main>
    );
}