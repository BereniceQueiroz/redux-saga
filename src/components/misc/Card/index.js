import { Wrapper } from './styles';

function Card({ image, name, price, portin, size }) {
  return (
    <Wrapper>
      <figure>
        {image && (
          <img
            src={image}
            title={name ? name : 'Banner'}
            alt={name ? name : 'Banner'}
          />
        )}
      </figure>
      <p>{name}</p>
      <p>
        {price} | {portin}
      </p>
      <span>{size}</span>
    </Wrapper>
  );
}

export default Card;
