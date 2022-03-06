import { call, select, put, all, takeLatest } from 'redux-saga/effects';

import { addToCartSuccess, updateAmountSuccess } from './actions';

function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id),
  );

  const currentAmount = productExists ? productExists.amount : 0;
  const amount = currentAmount + 1;

  if (productExists) {
    yield put(updateAmountSuccess(id, amount));
  }
  yield put(addToCartSuccess(products));
}

// qual action ouvir e qual método disparar
export default all([takeLatest('@cart/ADD_SUCCESS', addToCart)]);
