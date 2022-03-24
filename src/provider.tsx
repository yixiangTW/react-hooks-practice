import * as React from 'react'

export const Context = React.createContext(null)
export const Provider = ({ store, children }: { store: any, children: any}) => <Context.Provider value={store}>{children}</Context.Provider>
