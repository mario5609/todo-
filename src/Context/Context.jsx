import React, { createContext, useReducer } from 'react'

export const Context = createContext();

const initialState = [
  {
    id: 1111,
    value: "Hello World",
    status: ""
  },
  {
    id: 2222,
    value: "Test Word 1",
    status: ""
  },
  {
    id: 3333,
    value: "Test Word 2",
    status: ""
  }
]

export default function ContextProvider({ children }) {

  function reducer(state, action) {
    switch (action.type) {
      case "ADD":
        return [...state, ...[action.payload]];

      case "EDIT":
        const setting = action.payload
        if (setting.status != "") {
          setting.status = "";
        } 
        else {
          setting.status = "Checked";
        };

      case "DELETE":
        const newState = state.filter(object => {
          return object.id !== action.payload;
        });
        return newState

      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}
