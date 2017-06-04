import React from 'react';
import styled from 'styled-components';
import distanceInWords from 'date-fns/distance_in_words';
import ruLocale from 'date-fns/locale/ru';

import { H2 } from './ui/Heading';
import Block from './ui/Block';
import doPay from './tinkoff';

const startAt = new Date('2017 Jun 5 12:00');

const makePayment = () =>
  doPay({
    TerminalKey: process.env.TINKOFF_TOKEN,
    OrderId: undefined,
    Amount: 10000 * 100,
    Language: 'ru',
  });

const Btn = styled.button`
  font-family: Courier New, Courier, monospace;
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

export const PayButton = ({ isDisabled = false }) => (
  <Btn disabled={isDisabled} onClick={makePayment}>
    Оплатить 10 000 руб
  </Btn>
);

export default class Payment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDisabled: true,
      now: new Date(),
    };
  }

  componentWillMount() {
    setInterval(() => {
      const now = new Date();

      this.setState({
        now,
        isDisabled: startAt.getTime() > now.getTime(),
      });
    }, 1000);
  }

  render() {
    const { state } = this;
    const diff = distanceInWords(state.now, startAt, {
      locale: ruLocale,
      addSuffix: true,
      includeSeconds: true,
    });

    return (
      <Block>
        <H2>Оплата</H2>
        <PayButton isDisabled={state.isDisabled} />
        {state.isDisabled &&
          <p>
            <i>Старт продаж 5 июня в 12:00 ({diff})</i>
          </p>}

        <p>
          После оплаты я пришлю тебе инвайт в закрытую группу в Телеграме.
        </p>
      </Block>
    );
  }
}
