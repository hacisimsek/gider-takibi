import React from 'react'
import { useDispatch } from "react-redux";
import { deleteTransaction } from "../redux/actions/actions"

//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '$ ' +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}

export const Transaction = ({liste}) => {
  const dispatch = useDispatch();
  const sign = liste.amount < 0 ? '-' : '+';

    return (
      <li className={liste.amount < 0 ? 'minus' : 'plus'}>
        {liste.text} 
        <span>{sign} {moneyFormatter(liste.amount)}</span>
        <button onClick={() => dispatch(deleteTransaction(liste.id))} className="delete-btn">x</button>
      </li>
    )
}
