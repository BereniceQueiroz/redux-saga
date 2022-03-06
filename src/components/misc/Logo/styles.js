import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  svg {
    height: 6rem;
    width: 14rem;
    pointer-events: none;
  }

  ${media.lessThan('medium')`
      svg {
        height: 2rem;
        width: 8rem;
      }
    `}
`;
