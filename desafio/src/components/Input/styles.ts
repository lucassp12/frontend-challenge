import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  label {
    font-size: 16px;
    line-height: 19px;
    color: #fff;
    margin-left: 2px;
  }

  input {
    width: 455px;
    height: 48px;
    background: #ffffff;
    border: none;
    border-radius: 7px;
    padding: 15px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #868686;

    @media (max-width: 520px) {
      width: 350px;
    }

    @media (max-width: 400px) {
      width: 320px;
    }
  }
`;
