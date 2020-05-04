import amountSum from '../../selectors/amountSum';
import expenses from '../fixtures/expenses';

test('Should return 0 if no expenses', () => {
  const sum = amountSum([]);
  expect(sum).toBe(0);
});

test('Should add up a single expense correctly', () => {
  const expense = [expenses[0]];
  const sum = amountSum(expense);
  expect(sum).toBe(expense[0].amount);
});

test('Should add up multiple expenses correctly', () => {
  const sum = amountSum(expenses);
  expect(sum).toBe(114195);
});