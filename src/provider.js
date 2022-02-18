import React from 'react';

export const Context = React.createContext(null)

export const Provider = ({ store, children}) => <Context.Provider value={store}>{children}</Context.Provider>