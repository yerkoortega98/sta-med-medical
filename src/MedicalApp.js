import React from 'react'
import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';
import { Provider }from 'react-redux';

export const MedicalApp = () => {
    return (
        <Provider store={store}>
            < AppRouter />
        </Provider>
       
    )
}
