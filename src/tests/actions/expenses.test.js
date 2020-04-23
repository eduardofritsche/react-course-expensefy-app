import { addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123asdf' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123asdf'
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('123asdf', { description: 'asdf'} );
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123asdf',
    updates: { description: 'asdf' }
  });
});

test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'this as last months rent'
  }
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('should setup add expense actino object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      amount: 0,
      note: '',
      createdAt: 0
    }
  });
});