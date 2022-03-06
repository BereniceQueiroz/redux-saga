import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div``;

export const Title = styled.h1`
  text-align: center;
  font-size: 18px;
  padding: 1rem;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  font-size: 18px;
  grid-gap: 20px;

  ${media.greaterThan('medium')`
   grid-template-columns: repeat(3, 1fr);
  `}

  ${media.greaterThan('large')`
   grid-template-columns: repeat(4, 1fr);
  `}
`;

export const Button = styled.button`
  background: #000;
  color: #fff;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
  margin-top: auto;
  display: flex;
  align-items: center;
  transition: background 0.2s;

  div {
    display: flex;
    align-items: center;
    padding: 12px;
    background: rgba(0, 0, 0, 0.1);
    svg {
      margin-right: 5px;
    }
  }
  span {
    flex: 1;
    text-align: center;
    font-weight: bold;
  }
}
`;
