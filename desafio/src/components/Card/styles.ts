import styled from 'styled-components';

interface IButtonProps {
  image: string;
}

export const Container = styled.div`
  width: 250px;
  background: #fff;
  height: 250px;
  border-radius: 10px;
  margin: 0 0 33px 30px;

  -webkit-box-shadow: 0px 4px 5px 0px rgba(171, 171, 171, 0.75);
  -moz-box-shadow: 0px 4px 5px 0px rgba(171, 171, 171, 0.75);
  box-shadow: 0px 4px 6px 0px rgba(171, 171, 171, 0.75);

  display: flex;
  flex-direction: column;

  span {
    margin: 43px 0 0 26px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #000000;

    &:nth-child(2n) {
      margin-top: 11px;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button<IButtonProps>`
  margin: 20px 0 0 23.25px;
  color: #868686;
  padding: 1px;
  width: 14px;
  height: 14px;
  background: url(${props => props.image}) no-repeat center;
  border: none;

  &:nth-child(2n) {
    margin-right: 16px;
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
