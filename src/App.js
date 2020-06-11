import React from 'react';
import { Header } from './componets/Header';
import { Balance } from './componets/Balance'; 
import { IncomeExpences } from './componets/IncomeExpences';
import { TransactionList } from './componets/TransactionList';
import { AddTransacttion } from './componets/AddTransacttion';
import { GlobalProvider } from './Context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpences/>
        <TransactionList/>
        <AddTransacttion/>
      </div>
    </GlobalProvider>
  );
}
export default App;