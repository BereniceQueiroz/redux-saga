import { Wrapper, ContentInfo, ContentButton, Button } from './styles';

const fallbackImage =
  'http://dummyimage.com/470x594/fff/000?text=imagem+indisponível';

function Card({ image, name, price, portin, size, onClick }) {
  return (
    <Wrapper>
      <div>
        {image ? (
          <img
            src={image}
            title={name ? name : 'Banner'}
            alt={name ? name : 'Banner'}
          />
        ) : (
          <img
            src={fallbackImage}
            title={'Imagem indisponível'}
            alt={'Imagem indisponível'}
          />
        )}
      </div>
      <ContentInfo>
        <h2>{name}</h2>
        <p>
          <strong>{price}</strong> | {portin}
        </p>

        {size && (
          <ul>
            {size.map((size, index) => (
              <li key={index}>{size}</li>
            ))}
          </ul>
        )}
      </ContentInfo>
      <ContentButton>
        <Button type="button" onClick={onClick}>
          <span>COMPRAR</span>
        </Button>
      </ContentButton>
    </Wrapper>
  );
}

export default Card;
