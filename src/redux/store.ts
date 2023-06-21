import { createStore, Store } from 'redux';


// Определение начального состояния
const initialState = {
  counter: 0
};

// Определение редьюсера
const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

// Создание хранилища
const store = createStore(reducer);


export default store;
