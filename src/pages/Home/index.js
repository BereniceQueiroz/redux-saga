import { useState, useEffect } from 'react';
import Header from 'components/strutcture/Header';
import { Wrapper, Title } from './styles';
import Card from 'components/misc/Card';

function Home() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        let productsResponse = await fetch('./products.json');
        let products = await productsResponse.json();
        console.log(products);
        setProductsList(products.products);
      } catch (e) {
        console.log(e);
      }
    }
    getProducts();
  }, []);

  return (
    <Wrapper>
      <Header />
      <Title>Roupas Femininas</Title>
      {productsList.map((products, index) => (
        <Card
          key={index}
          image={products.image}
          name={products.name}
          price={products.price}
          portin={products.portin}
          size={products.sizes
            .filter(size => size.available === true)
            .map(size => size.size)}
        />
      ))}
    </Wrapper>
  );
}

export default Home;
