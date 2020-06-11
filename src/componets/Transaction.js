import React , {useContext} from 'react';
import { GlobalContext} from '../Context/GlobalState';

export const Transaction = ({ transaction }) => {

  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? '-': '+';
    //sign ma hmny ya btaya hai k agr amount ki value less than 0 ho tou amount k sth
    //minus lgae wrna plus sign lgae.
  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign}PKR&nbsp;{Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} class="delete-btn">x</button>
    </li> 
  )
}
