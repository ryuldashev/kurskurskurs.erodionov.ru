import React from 'react';
import styled from 'styled-components';

import Block from './ui/Block';
import { H2, H3 } from './ui/Heading';

const Quote = styled.blockquote`
  font-style: italic;
  margin-top: -1rem;
  margin-bottom: 3rem;
`;

export default () =>
  (<Block>
    <H2>Ответы на вопросы</H2>
    <p>Раз часто спрашивают.</p>

    <Block size="xs">
      <H3>Как человек с таким дизайном лэндинга может учить фронтэнду?</H3>
      <p>
        Позвони моему корешу Дрейку на <a href="tel:+1-800-HOTLINEBLING">1-800-HOTLINEBLING</a> и
        спроси.
      </p>
      <Quote>
        Call me on my cell phone <br />
        Late night when you need my love <br />
        And I know when that hotline bling <br />
        That can only mean one thing
      </Quote>
    </Block>
    <Block size="xs">
      <H3>Реально ли научиться фронтэнду за месяц?</H3>
      <p>Ребята выше научились же.</p>
    </Block>
    <Block size="xs">
      <H3>Ты обещаешь золотые горы</H3>
      <p>40 000 рублей в месяц джуниору это золотые горы?</p>
    </Block>
    <Block size="xs">
      <H3>
        Ты разрушаешь индустрию, плодя <i>вайтишников</i>
      </H3>
      <p>Люди на курсе и без меня всему научатся. С нами это в миллион раз быстрее.</p>
      <a href="https://i.imgur.com/TsFknJu.png" target="_blank" rel="noopener noreferrer">
        <img src="https://i.imgur.com/TsFknJu.png" alt="" style={{ width: '100%' }} />
      </a>
    </Block>
    <Block size="xs">
      <H3>А…</H3>
      <p>
        Спроси <a href="http://t.me/evgenyrodionov">в Телеграме</a>, я отвечу.
      </p>
    </Block>
  </Block>);
