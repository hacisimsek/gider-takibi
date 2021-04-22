import React from 'react'
import { Transaction } from "./Transaction"
import { useSelector } from "react-redux"


export const TransactionList = () => {
   const {transaction} = useSelector(state => state)

    return (
        <>
        <h3>İşlem Listesi</h3>
        <ul  className="list">
            {
                transaction.map(liste => (<Transaction key={liste.id} liste={liste} />))
            }
        </ul>    
        </>
    )
}
