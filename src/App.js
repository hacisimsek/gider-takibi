import './App.css';
import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance';
import { Header } from './components/Header';
import { IncomeExpense } from './components/IncomeExpense';
import { TransactionList } from './components/TransactionList';

function App() {
  return (
    <>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpense/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </>
  );
}

export default App;
