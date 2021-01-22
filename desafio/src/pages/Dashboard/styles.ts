import styled from 'styled-components';

export const Container = styled.div`
  padding: 53px 0 174px 36px;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media (max-width: 400px) {
    padding: 53px 0 0 0;
    margin: 0;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 500px) {
    padding: 53px 0 0 0;
    margin: 0;
    justify-content: center;
    align-items: center;
  }
`;
