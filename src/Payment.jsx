import React from 'react';
import styled from 'styled-components';

import { H2 } from './ui/Heading';
import BlockInitial from './ui/Block';
import doPay from './tinkoff';
import { track } from './segment';

const makePayment = (amount) => {
  track('Checkout Started');

  doPay({
    TerminalKey: process.env.REACT_APP_TINKOFF_TOKEN,
    OrderId: undefined,
    Amount: amount * 100,
    Language: 'ru',
  });
};

const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Block = styled(BlockInitial)`
`;

const Btn = styled.button`
  font-family: Helvetica;
  font-style: italic;
  line-height: 40px;
  font-size: 15px;
  font-weight: 700;
  color: #ffffff;
  background: #ee5d89;
  border: 0;
  cursor: pointer;
  padding: 10px 20px;
  display: inline-block;
  z-index: 0;
  position: relative;
  width: 100%;

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

  @media screen and (min-width: 368px) {
    width: auto;
    font-size: 20px;
  }
`;

const Subtitle = styled.p`
  font-style: italic;
  text-align: center;
  margin-top: .5rem;
`;

export const PayButton = ({ disabled = false, amount }) =>
  (<Btn disabled={disabled} onClick={() => makePayment(amount)}>
    Оплатить {amount} руб
  </Btn>);

export default () =>
  (<Block>
    <H2>Оплата</H2>
    <p>
      Ещё раз: строгая программа, реальный проект с открытым красивым кодом, мой мгновенный фидбэк,
      крутая движуха в чатах.
    </p>
    <p>Готов? Будет сложно и пиздато.</p>
    <p>Это последний поток для новичков, больше я не буду проводить в этом году.</p>

    <Row>
      <Block size="xs">
        <PayButton amount={7500} />
        <Subtitle>2 проверки в день</Subtitle>
      </Block>
      <Block size="xs">
        <PayButton amount={10000} />
        <Subtitle>3 проверки в день</Subtitle>
      </Block>
      <Block size="xs">
        <PayButton amount={12500} />
        <Subtitle>4 проверки в день</Subtitle>
      </Block>
    </Row>

    <p>Я пришлю тебе инвайт в закрытую группу в Телеграме.</p>
  </Block>);
