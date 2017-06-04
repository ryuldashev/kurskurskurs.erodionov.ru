import React from 'react';
import styled from 'styled-components';
import { H1 } from './ui/Heading';

const Header = styled.header`
  margin-bottom: 50px;
`;

const Headline = styled.p`
  text-align: center;
`;

export default () => (
  <Header>
    <H1>Курс по фронтэнду</H1>
    <Headline>
      Премиальный бутиковый практический. Станешь солдатом от фронтэнда как я сам.
    </Headline>
  </Header>
);
