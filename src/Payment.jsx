import React from 'react';
import styled from 'styled-components';

import { H2 } from './ui/Heading';
import Block from './ui/Block';
import doPay from './tinkoff';
import { track } from './segment';

const makePayment = () => {
  track('Checkout Started');

  doPay({
    TerminalKey: process.env.REACT_APP_TINKOFF_TOKEN,
    OrderId: undefined,
    Amount: 10000 * 100,
    Language: 'ru',
  });
};

const Btn = styled.button`
  font-family: Helvetica;
  font-style: italic;
  line-height: 40px;
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  background: #ee5d89;
  border: 0;
  cursor: pointer;
  padding: 10px 40px;
  display: inline-block;
  z-index: 0;
  position: relative;

  &:hover {
    background: #e25882;
  }

  &[disabled] {
    background: #b1b1b1;
  }

  &:active {
    position: relative;
    transform: scale(.99);
  }
`;

export const PayButton = ({ isDisabled = false }) =>
  (<Btn disabled={isDisabled} onClick={makePayment}>
    Оплатить 10 000 руб
  </Btn>);

export default () =>
  (<Block>
    <H2>Оплата</H2>
    <p>
      Ещё раз: строгая программа, реальный проект с открытым красивым кодом, мой мгновенный
      фидбэк, крутая движуха в чатах.
    </p>
    <p>Готов? Будет сложно и пиздато.</p>

    <Block size="xs">
      <PayButton />
    </Block>

    <p>
      Я пришлю тебе инвайт в закрытую группу в Телеграме.
    </p>
  </Block>);
