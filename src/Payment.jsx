import React from 'react';
import qs from 'qs';

import { H2 } from './ui/Heading';
import Paragraph from './ui/Paragraph';
import doPay from './tinkoff';

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
  }

  render() {
    const { state } = this;
    const isDisabled = true;

    return (
      <Paragraph>
        <H2>Стоимость</H2>
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
            <i>Запись откроется 5 июня в 12:00</i>
          </p>}
        <p>
          После оплаты я пришлю тебе инвайт в закрытую группу в Телеграме.
        </p>
      </Paragraph>
    );
  }
}
