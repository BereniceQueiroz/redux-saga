import { useState, useEffect } from 'react';
import Header from 'components/strutcture/Header';
import * as S from './styles';
// import products from 'assets/mocks/products';

function Home() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        let productsResponse = await fetch('./products.json');
        let products = await productsResponse.json();
        console.log(products);
        setProductsList(products);
      } catch (e) {
        console.log(e);
      }
    }
    getProducts();
  }, []);

  return (
    <S.Wrapper>
      <Header />
      <h1>Roupas</h1>
    </S.Wrapper>
  );
}

export default Home;
