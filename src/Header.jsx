import React from 'react';
import styled from 'styled-components';
import { H1 } from './ui/Heading';

const Header = styled.header`
  margin-bottom: 50px;
`;

const Headline = styled.p`
  text-align: center;
  margin-bottom: 50px;
`;

export default () =>
  (<Header>
    <H1>Курс по фронтэнду</H1>
    <Headline>
      Премиальный бутиковый практический. Станешь солдатом от фронтэнда как я сам.
    </Headline>

    <p>
      Доброго времени суток 👋🏻
    </p>
    <p>
      Фронтэнд — очень перспективная специализация, в современном мире без навыков фронтэнда никак
      нельзя, а ещё фронтэнд это престижная професси...................
    </p>
    <br />
    <p><strong>Ладно, кат зе буллщит</strong>. Ты на моём лэндинге и сейчас я буду продавать.</p>
    <p>
      Меня зовут Евгений Родионов и я учу людей фронтэнду. Я руководил разработкой Рублёвки.ру и
      обучил команду,
      которая сейчас работает в Тинькофф, Рокетбанке, Ростелекоме и немецком Kairion. Спроси у{' '}
      <a href="https://t.me/march213">Жени</a>
      , <a href="https://t.me/Misaka">Ильи</a>, <a href="https://t.me/grushetsky">Кости</a>,{' '}
      <a href="https://t.me/Lyudmila_Promyslova">Люды</a> или{' '}
      <a href="https://t.me/lizamois">Лизы</a> сам.
    </p>
    <p>
      Я веду канал про фронтэнд в <a href="https://t.me/rodionovrodionovrodionov">Телеграме</a>,
      пишу статьи <a href="https://medium.com/@evgeny.rodionov">на Медиуме</a> и выпускаю
      5-минутные видео <a href="https://www.youtube.com/c/evgenyrodionov">на Ютубе</a>.
    </p>
    <p>
      Теперь я веду курс по фронтэнду. Хочу, чтобы в России были крутые
      интерфейсы. Хочу&nbsp;взращивать крутых ребят, с которыми буду сам работать.
    </p>
  </Header>);
