import React from 'react';
import styled from 'styled-components';
import { random as generateEmojis } from 'random-unicode-emoji';

import { H2, H3 } from './ui/Heading';
import Block from './ui/Block';

const Results = styled.div`
  margin-bottom: 2rem;
`;

const Nickname = styled.span`
  color: #000;
  border-bottom: 1px solid #F8B1C6;
  box-shadow: inset 0 -5px 0px 0px #F8B1C6;
  font-family: monospace;
  text-decoration: none;
  transition: .2s;
`;

const Result = styled.a`
  padding: 10px 20px 12px 20px;
  margin-bottom: 1rem;
  margin-right: 1rem;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 15px 20px -10px rgba(0,0,0,0.3);
  transition: .2s;
  display: inline-block;
  max-width: 100%;
  text-decoration: none;

  &:hover {
    box-shadow: 0px 10px 20px -5px rgba(0,0,0,0.4);

    ${Nickname} {
      box-shadow: none;
      border-bottom-color: transparent;
    }
  }
`;

const Break = styled.br`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const results = [
  { nickname: 'prostofrost', url: 'https://github.com/prostofrost/adidas-shop-react' },
  { nickname: 'correon', url: 'https://github.com/correon/adidas-shop-frontend' },
  { nickname: 'OlegTepesh', url: 'https://github.com/OlegTepesh/adidas-shop-frontend' },
  { nickname: 'thadjbullet', url: 'https://github.com/thadjbullet/adidas-react' },
  { nickname: 'nevstafev', url: 'https://github.com/nevstafev/adidas-shop-frontend' },
  { nickname: 'hmuriy1', url: 'https://github.com/hmuriy1/adidas-shop-frontend' },
  { nickname: 'tynopet', url: 'https://github.com/tynopet/adidas-shop-frontend' },
  { nickname: 'lysycyn', url: 'https://github.com/lysycyn/adidas-shop-frontend' },
  { nickname: 'stk-dmitry', url: 'https://github.com/stk-dmitry/adidas-shop-frontend' },
];

const emojis = generateEmojis({ count: results.length });

export default () => (
  <Block>
    <H2>Результат</H2>
    <p>
      Научитесь делать средние веб-приложения: интернет-магазины, ЦРМ-системы, лэндинги.
    </p>
    <p>
      Программисты найдут работу джуниорами от 30к/мес,
      а руководители, маркетологи и эйчары смогут понимать что делают программисты.
    </p>
    <p>
      К концу мы сделаем реакт-приложение, задеплоим его на
      {' '}
      <a href="https://now.sh" target="_blank" rel="noopener noreferrer">now.sh</a>
      {' '}
      через
      {' '}
      <a href="https://travis-ci.org" target="_blank" rel="noopener noreferrer">Трэвис</a>,
      {' '}
      и, конечно, оно будет с открытым кодом на Гитхабе.
    </p>

    <H3>Как прошёл первый майский поток?</H3>
    <p>Охуенно, вот работы ребят:</p>
    <Results>
      {results.map((result, index) => (
        <Result href={result.url} target="_blank" rel="noopener noreferrer" key={result.nickname}>
          <div className="results-icon">{emojis[index]}</div>

          <Nickname>@{result.nickname}</Nickname>
        </Result>
      ))}
    </Results>
    <p>
      Отзывы: <Break />
      <a href="https://vk.com/wall52708366_1930" target="_blank" rel="noopener noreferrer">
        vk.com/wall52708366_1930
      </a>
    </p>
  </Block>
);
