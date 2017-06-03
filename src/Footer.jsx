import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  background: #c94d73;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 20px;
  color: #fff;
  margin-bottom: -100px;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  padding-left: 25px;
  padding-right: 25px;

  @media screen and (min-width: 768px) {
    width: 768px;
  }
`;

const Legal = styled.p`
  display: inline-block;
  font-size: 14px;
  opacity: .5;
`;

const Credits = styled.p`
  display: inline-block;
  width: 400px;
  font-size: 14px;
  margin-left: 50px;
  vertical-align: top;

  @media screen and (max-width: 992px) {
    display: block;
    width: 100%;
    margin-left: 0;
  }
`;

export default () =>
  (<Footer>
    <Wrapper>
      <Legal>
        ИП Родионов Евгений Викторович,<br />
        ИНН 503621650441,<br />
        ОГРНИП 315507400016220.
      </Legal>
      <Credits>
        С сайтом помогали участники первого потока курса —
        {' '}
        <a href="https://github.com/disha1010" target="_blank">
          @disha1010
        </a>
        {' '}

        и&nbsp;
        <a href="https://github.com/zhabinskiy" target="_blank">
          @zhabinskiy
        </a>
        .
      </Credits>
    </Wrapper>
  </Footer>);
