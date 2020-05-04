import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import amountSum from '../selectors/amountSum';

export const ExpenseSummary = ({ length, total }) => {
  const expenseWord = length === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(total / 100).format('$0,0.00');
 
  return (
    <div>
      <h1>{`Viewing ${length} ${expenseWord} totalling ${formattedExpensesTotal}`}</h1>
    </div>
  )
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    length: visibleExpenses.length,
    total: amountSum(visibleExpenses)
  }
};

export default connect(mapStateToProps)(ExpenseSummary);