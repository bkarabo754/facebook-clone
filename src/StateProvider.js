import React, { createContext, useContext, useReducer } from 'react'

export const StateContext = createContext();

export const StateProvider = ({ reducer, initializeState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initializeState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);