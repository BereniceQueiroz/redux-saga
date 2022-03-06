import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    background-color: #f4f2f2;
    img {
      align-self: center;
      max-width: 150px;
      margin: 0 auto;
      height: 100%;
      max-height: 250px;
      object-fit: contain;
    }
  }
  }
`;

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;

  h2 {
    font-size: 1.2rem;
  }

  p {
    font-size: 1rem;
  }

  ul {
    display: flex;

    li {
      font-size: 1rem;
      border: 1px solid;
      border-radius: 50%;
      padding: 0.3rem 0.5rem;
      margin-left: 2px;
    }
  }
`;

export const ContentButton = styled.div`
  background: #fff;
  box-shadow: 0 0.3rem 1.5rem rgb(0 0 0 / 50%);
  padding: 0.5rem;
`;

export const Button = styled.button`
  background: #000;
  padding: 1.5rem;
  width: 100%;
  color: #fff;
  border: 0;
  overflow: hidden;
  margin-top: auto;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 1.5;
  }
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
