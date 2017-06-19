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
    display: flex;
  }
`;

const Legal = styled.p`
  font-size: 14px;
  opacity: .5;

  @media screen and (min-width: 768px) {
    flex-basis: 50%;
  }
`;

const Credits = styled.p`
  margin-left: 0;
  font-size: 14px;
  vertical-align: top;

  @media screen and (min-width: 768px) {
    flex-basis: 50%;
    margin-left: 50px;
    text-align: right;
  }
`;

export default () =>
  (<Footer>
    <Wrapper>
      <Legal>
        ИП Родионов Евгений Викторович — всё серьёзно<br />
        ИНН 503621650441 • ОГРНИП 315507400016220
      </Legal>
      <Credits>
        Код открыт на{' '}
        <a
          href="https://github.com/evgenyrodionov/kurskurskurs.erodionov.ru"
          target="_blank"
          rel="noopener noreferrer"
        >
          Гитхабе
        </a>
        <br />
        Сайт сделали&nbsp;
        <a href="https://github.com/disha1010" target="_blank" rel="noopener noreferrer">
          @disha1010
        </a>&nbsp;и&nbsp;
        <a href="https://github.com/zhabinskiy" target="_blank" rel="noopener noreferrer">
          @zhabinskiy
        </a>
      </Credits>
    </Wrapper>
  </Footer>);
