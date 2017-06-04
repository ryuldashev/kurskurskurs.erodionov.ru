import React from 'react';
import styled from 'styled-components';

import { H3 } from './ui/Heading';
import { PayButton } from './Payment';

const Box = styled.div`
  background: #fff;
  box-shadow: 0px 15px 20px -10px rgba(0,0,0,0.3);
  border-radius: 10px;
  padding-top: 50px;
  padding-bottom: 25px;
  position: fixed;
  top: 100px;
  left: 15px;
  right: 15px;
  /* right: 0; */
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 768px;
    left: auto;
    right: auto;
  }

  a {
    color: inherit;
  }
`;

const HError = styled(H3)`
  color: red;
`;

export default ({ isSuccess, paymentId, message }) => {
  if (isSuccess) {
    return (
      <Box>
        <H3>Велкам аборд!</H3>
        <p>
          Напиши мне
          {' '}
          <a href="https://t.me/evgenyrodionov">в телеграм</a>
          {' '}
          и скажи свой айдишник:
          {' '}
          <strong>{paymentId}</strong>
        </p>
      </Box>
    );
  } else if (!isSuccess) {
    return (
      <Box>
        <HError>К сожалению, ошибка при оплате:</HError>
        <p>
          {message}
        </p>
        <PayButton />
      </Box>
    );
  }

  return null;
};
