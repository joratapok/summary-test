import styled from 'styled-components';

export const QuotesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  min-width: 520px;
  flex-wrap: wrap;
  @media (min-width: 800px) {
    width: 50%;
    justify-content: flex-end;
  }
  @media (min-width: 500px) {
    flex-wrap: nowrap;
  }
`;

export const QuoteContainer = styled.blockquote`
  position: relative;
  text-align: center;
  padding: 1rem 1rem;
`;

const ImageQuotes = styled.img`
  position: absolute;
  width: 40px;
  height: 32px;
  opacity: 0.3;
`;

export const TopImageQuotes = styled(ImageQuotes)`
  top: 0;
  left: -0.5rem;
`;

export const BottomImageQuotes = styled(ImageQuotes)`
  bottom: 0;
  right: -0.5rem;
  rotate: 180deg;
`;
