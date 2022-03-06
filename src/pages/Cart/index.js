import { Wrapper, ProductTable, Total } from './styles';
import Header from 'components/strutcture/Header';
import { useSelector, useDispatch } from 'react-redux';
import * as CartActions from 'store/modules/cart/actions';
import { formatPrice } from 'utils/format';
import { components } from 'assets';

const fallbackImage =
  'http://dummyimage.com/470x594/fff/000?text=imagem+indisponível';

function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: product.regular_price * product.amount,
    })),
  );
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        let priceFormatted = product.regular_price.replace('R$ ', '');
        return totalSum + priceFormatted * product.amount;
      }, 0),
    ),
  );

  console.log(total);

  const dispatch = useDispatch();

  // function increment(product) {
  //   dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  // }

  // function decrement(product) {
  //   dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  // }
  return (
    <Wrapper>
      <Header />
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Subtotal</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr>
              <td>
                <img
                  src={product.image ? product.image : fallbackImage}
                  alt={product.name}
                />
              </td>
              <td>
                <strong>{product.name}</strong>
                <strong>{product.regular_price}</strong>
              </td>
              <td>
                <strong>{product.name}</strong>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => decrement(product)}>
                    <components.RemoveCart />
                  </button>
                  <input type="number" readOnly value={1}></input>
                  <button type="button" onClick={() => increment(product)}>
                    <components.AddCart />
                  </button>
                </div>
              </td>
              <td>{product.actual_price}</td>
              <td>
                <button
                  type="button"
                  onClick={() =>
                    dispatch(CartActions.removeFromCart(product.id))
                  }
                >
                  <components.DeleteCart />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <footer>
        <button>Finalizar Pedido</button>
        <Total>
          <span>Total</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Wrapper>
  );
}

export default Cart;
