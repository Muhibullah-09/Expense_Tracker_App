import React, {useState , useContext} from 'react';
import { GlobalContext} from '../Context/GlobalState';

export const AddTransacttion = () => {
    //Now here I use Hook
  const [text , setText] = useState('');
  const [amount , setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

    //Here we create onSubmit function
  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random()*1000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlfor="text">Text</label>
                    {/*here in input field we create setText function*/}
          <input type="text" value = {text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label for="amount">Amount <br />(negative - expense, positive - income)</label>
            {/*Here we create same setAmount function*/}
          <input type="number" value = {amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}