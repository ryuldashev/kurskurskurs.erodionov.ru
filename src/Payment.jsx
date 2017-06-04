import React from 'react';
import qs from 'qs';
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

export default class Payment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDirty: false,
      isDisabled: true,
      now: new Date(),
    };
  }

  componentWillMount() {
    const result = qs.parse(window.location.search.substr(1));
    const { ErrorCode: code, Message: message, Success: isSuccess, PaymentId: paymentId } = result;

    this.setState({
      code,
      message,
      isSuccess: isSuccess === 'true', // because Tinkoff send boolean as string
      isDirty: Boolean(isSuccess),
      paymentId,
    });

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
    const isDisabled = state.isDisabled;
    const diff = distanceInWords(state.now, startAt, {
      locale: ruLocale,
      addSuffix: true,
      includeSeconds: true,
    });

    return (
      <Block>
        <H2>Оплата</H2>
        {!state.isDirty &&
          <button
            className="tinkoffPayRow tinkoffPayButton"
            disabled={isDisabled}
            onClick={makePayment}
          >
            Оплатить 10 000 руб
          </button>}
        {isDisabled &&
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
