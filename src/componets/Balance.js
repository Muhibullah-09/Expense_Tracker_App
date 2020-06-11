import React , {useContext } from 'react';
import { GlobalContext} from '../Context/GlobalState';

export const Balance = () =>{
  const { transactions } = useContext(GlobalContext);
    //now here we need to doo some calculations
  const amounts = transactions.map(transactions => transactions.amount);

  const total = amounts.reduce((acc , item) => (acc += item ), 0).toFixed(2);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>PKR&nbsp;{total}</h1>
    </>
  )
}