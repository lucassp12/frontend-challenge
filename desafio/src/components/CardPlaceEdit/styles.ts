import styled from 'styled-components';

export const Container = styled.div`
  width: 440px;
  height: 290px;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 30%;
  margin-left: -220px;
  margin-top: -50px;
  background: #fff;
  -webkit-box-shadow: 0px 4px 5px 0px rgba(171, 171, 171, 0.75);
  -moz-box-shadow: 0px 4px 5px 0px rgba(171, 171, 171, 0.75);
  box-shadow: 0px 4px 6px 0px rgba(171, 171, 171, 0.75);
  display: flex;
  flex-direction: column;

  @media (max-width: 400px) {
    width: 340px;
    margin-left: -170px;
    margin-top: -50px;
  }

  span {
    margin: 30px 0 0 26px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #000000;

    &:nth-child(2n) {
      margin-top: 11px;
    }
  }

  input {
    width: 340px;
    height: 30px;
    background: #ffffff;
    border: 1px solid #868686;
    border-radius: 7px;
    padding: 10px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    color: #868686;
    margin-left: 5px;

    @media (max-width: 440px) {
      width: 240px;
    }
  }

  button {
    width: 200px;
    height: 40px;
    border: none;
    border-radius: 7px;
    background: #006c18;
    text-align: center;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 21px;
    color: #ffffff;
    margin: 0 auto;
    margin-top: 15px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    margin: 10px 10px 0 0;
    width: 20px;
    height: 20px;
    border: none;
    background: #fff;

    img {
      width: 20px;
      height: 20px;
    }
  }
`;

export const ContainerHeader = styled.div`
  margin: 9px 11px 0 8px;
  padding-bottom: 11px;
  border-bottom: 2px solid #ababab;
  display: flex;
  flex-direction: column;

  img {
    width: 56px;
    height: 34px;
    margin: -6px 0 0 14px;
  }

  strong {
    margin: 16px 0 0 14px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #4f9419;
    text-transform: uppercase;
  }
`;
