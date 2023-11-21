import React, { createContext, useReducer } from 'react'

const createDataContext = (reducer, actions, intialState) => {
  const Context = createContext()

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, intialState)

    // actions === {addBlogPost:(dispatch)=>{return () =>{}}}
    const boundAction = {}
    for (let key in actions) {
      boundAction[key] = actions[key](dispatch)
    }

    return (
      <Context.Provider value={{ state, ...boundAction }}>
        {children}
      </Context.Provider>
    )
  }
  return { Context, Provider }
}

export default createDataContext
