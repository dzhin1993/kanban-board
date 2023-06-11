import React from "react";
import {Provider} from "react-redux";
import {render, screen} from '@testing-library/react';


import App from './App';
import store from "./store";


const renderApp = () =>
    <Provider store={store}>
      <App/>
    </Provider>

test('renders learn react link', () => {
    render(renderApp());
    const linkElement = screen.getByText(/Kanban Board/i);
    expect(linkElement).toBeInTheDocument();
});
