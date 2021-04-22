import React,{ useState } from 'react'
import { useDispatch } from "react-redux";
import { addTransaction } from "../redux/actions/actions";

export const AddTransaction = () => {
    const [text, setText] = useState(" ")
    const [amount, setAmount] = useState(0)

    const dispatch = useDispatch();
    const onSubmit = e => {
        e.preventDefault();
    
        const newTransaction = {
          id: Math.floor(Math.random() * 100000000),
          text,
          amount: +amount
        }
    
        dispatch(addTransaction(newTransaction));
      }
    return (
        <> 
        <h3>Yeni İşlem Ekle</h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Yeni İşlem</label>
                <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="İşlem giriniz..." />
            </div>
            <div className="form-control">
                <label htmlFor="amount">Miktar
                <br />
                (negatif - gider ,pozitif - gelir)</label>
                <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Miktar giriniz..." />
            </div>
            <button className="btn">Add transaction</button>
        </form>    
        </>
    )
}
