import React, { Component } from 'react';
import styled from 'styled-components';
import distanceInWords from 'date-fns/distance_in_words';
import isBefore from 'date-fns/is_before';
import ruLocale from 'date-fns/locale/ru';

import { H2 } from './ui/Heading';
import Block from './ui/Block';
import doPay from './tinkoff';
import { track } from './segment';

const startAt = new Date(2017, 5, 5, 12, 0);

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
  font-family: Courier New, Courier, monospace;
  line-height: 40px;
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  background: #ee5d89;
  border: 0;
  cursor: pointer;
  padding: 10px 40px;
  margin-top: 10px;
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

export default class Payment extends Component {
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
      const isDisabled = isBefore(now, startAt);

      this.setState({
        now,
        isDisabled,
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
