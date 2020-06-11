import React , { createContext , useReducer } from 'react';
import AppReducer from './AppReducer';

//Now we create initial state


const initialState = {
    transactions: []
}

//Now we create a global context

export const GlobalContext = createContext(initialState);

//Now if we want to use this in other components first we need to create "Provider Component".

export const GlobalProvider = ({ children }) => {
  const [state , dispatch] = useReducer(AppReducer , initialState);

    //Now Here we create a action for Delete Transaction
  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

    //Now Here we create a action for Add transaction
  const addTransaction = (transaction) => {
    dispatch({
      type: 'Add_TRANSACTION',
      payload: transaction
    });
  }
  
  return (<GlobalContext.Provider value = {{
    transactions : state.transactions,
    deleteTransaction,
    addTransaction
  }}>
       {children}
  </GlobalContext.Provider>);
    //So first we provide the context then we use it anywhere with "consumer" keyword.

}
//Before we consume it in other child-components we need to create our reducer first