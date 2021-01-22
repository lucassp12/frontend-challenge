import styled from 'styled-components';
import Vector from '../../assets/Vector.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    font-size: 16px;
    line-height: 19px;
    color: #fff;
    margin-left: 2px;
  }

  select {
    width: 303px;
    height: 48px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: #ffffff url(${Vector}) 271px 50% no-repeat;
    border: none;
    border-radius: 7px;
    padding: 15px 0px 14px 15px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #868686;
  }
`;
