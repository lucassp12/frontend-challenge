import styled from 'styled-components';

export const Container = styled.div`
  background: #4f9419;
  width: 100%;
  height: 247px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1220px) {
    height: 300px;
  }

  form {
    width: 1295px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1220px) {
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: 300px;
      height: 500px;
    }
  }
`;
