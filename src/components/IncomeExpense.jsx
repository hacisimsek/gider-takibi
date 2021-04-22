import React from 'react'
import { useSelector } from "react-redux"

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

export const IncomeExpense = () => {
    const {transaction} = useSelector(state => state)
    const amounts = transaction.map(liste => liste.amount)
    const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  );

    return (
        <div className="inc-exp-container">
            <div >
                <h4>Gelir</h4>
                <p className="money plus">{moneyFormatter(income)}</p>
            </div>
            <div>
                <h4>Gider</h4>
                <p className="money minus">{moneyFormatter(expense)}</p>
            </div>
        </div>
    )
}
