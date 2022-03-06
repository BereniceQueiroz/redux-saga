import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Message = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 1rem;
    background-color: ${theme.colors.secondary};
    align-items: center;

    ul {
      display: flex;
    }

    li + li {
      border-left: 1px solid;
      margin-left: 1.5rem;
      padding-left: 1.5rem;
    }

    li:last-child {
      ${media.lessThan('large')`
          display: none;
      `}
    }
  `}
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;

  svg {
    height: 20px;
  }

  a {
    display: flex;
    align-items: center;
    span {
      color: #000;
    }
  }

  ${media.greaterThan('medium')`
    padding: 1rem 6rem;
  `}
`;
