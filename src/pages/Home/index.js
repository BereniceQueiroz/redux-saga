import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from 'components/strutcture/Header';
import { Wrapper, Title, CardGrid } from './styles';
import Card from 'components/misc/Card';
import * as CartActions from 'store/modules/cart/actions';

function Home() {
  const [productsList, setProductsList] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {}),
  );
  const dispatch = useDispatch();
  useEffect(() => {
    async function getProducts() {
      try {
        let productsResponse = await fetch('./products.json');
        let products = await productsResponse.json();
        setProductsList(products.products);
        console.log(productsList);
      } catch (e) {
        console.log(e);
      }
    }
    getProducts();
  }, []);

  function handleAddProduct(product) {
    console.log(product);
    dispatch(CartActions.addToCartSuccess(product));
  }

  return (
    <Wrapper>
      <Header />
      <Title>Roupas</Title>
      <CardGrid>
        {productsList?.map(product => (
          <Card
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.actual_price}
            portin={product.installments}
            size={product.sizes
              .filter(size => size.available === true)
              .map(size => size.size)}
            onClick={() => handleAddProduct(product)}
          />
        ))}
      </CardGrid>
    </Wrapper>
  );
}

export default Home;
