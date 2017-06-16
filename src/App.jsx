import React, { Component } from 'react';
import qs from 'qs';
import styled from 'styled-components';

import { track } from './segment';

import Header from './Header';
import About from './About';
import Schedule from './Schedule';
import Results from './Results';
import Payment from './Payment';
import Payed from './Payed';
import Footer from './Footer';

const Main = styled.main`
  width: 100%;
  margin: 0 auto;
`;

const Content = styled.section`
  margin: 0 auto;
  margin-bottom: 50px;
  padding-left: 25px;
  padding-right: 25px;

  @media screen and (min-width: 768px) {
    & {
      width: 768px;
    }
  }
`;

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDirty: false,
    };
  }

  componentWillMount() {
    const result = qs.parse(window.location.search.substr(1));
    const { ErrorCode: code, Message: message, Success: isSuccess, PaymentId: paymentId } = result;

    this.setState(
      {
        code,
        message,
        isSuccess: isSuccess === 'true', // because Tinkoff send boolean as string
        isDirty: Boolean(isSuccess),
        paymentId,
      },
      (nextState) => {
        if (nextState.isSuccess) track('Order Completed');
      },
    );
  }

  render() {
    const { isSuccess, paymentId, message } = this.state;

    return (
      <Main>
        <Content>
          <Header />
          <About />
          <Schedule />
          <Results />
          {!this.state.isDirty && <Payment />}
          {this.state.isDirty &&
            <Payed isSuccess={isSuccess} paymentId={paymentId} message={message} />}
        </Content>
        <Footer />
      </Main>
    );
  }
}
