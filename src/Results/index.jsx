import React from 'react';
import { random as generateEmojis } from 'random-unicode-emoji';

import { H2, H3 } from '../ui/Heading';
import Block from '../ui/Block';
import { Results, Result, Break } from './styled';

const results = [
  { nickname: 'prostofrost', repo: 'prostofrost/adidas-shop-react' },
  { nickname: 'correon', repo: 'correon/adidas-shop-frontend' },
  { nickname: 'OlegTepesh', repo: 'OlegTepesh/adidas-shop-frontend' },
  { nickname: 'thadjbullet', repo: 'thadjbullet/adidas-react' },
  { nickname: 'nevstafev', repo: 'nevstafev/adidas-shop-frontend' },
  { nickname: 'hmuriy1', repo: 'hmuriy1/adidas-shop-frontend' },
  { nickname: 'tynopet', repo: 'tynopet/adidas-shop-frontend' },
  { nickname: 'lysycyn', repo: 'lysycyn/adidas-shop-frontend' },
  { nickname: 'stk-dmitry', repo: 'stk-dmitry/adidas-shop-frontend' },
];

const results2 = [
  { nickname: 'sgovorukhin', repo: 'sgovorukhin/yard-frontend' },
  { nickname: 'VLanc', repo: 'VLanc/yard-frontend' },
  { nickname: 'redelvis', repo: 'redelvis/yard-frontend' },
  { nickname: 'barbagrigia', repo: 'barbagrigia/yard-frontend' },
  { nickname: 'Negenii', repo: 'Negenii/yard-frontend' },
  { nickname: 'AnnEagle', repo: 'AnnEagle/yard-frontend' },
  { nickname: 'kprvlv', repo: 'kprvlv/yard-frontend' },
  { nickname: 'shnider', repo: 'shnider/yard-frontend' },
  { nickname: 'akronb', repo: 'akronb/yard-frontend' },
  { nickname: 'frontendretard', repo: 'frontendretard/yard-frontend' },
  { nickname: 'faviru', repo: 'faviru/yard-frontend' },
  { nickname: 'westfalensgod', repo: 'westfalensgod/yard-frontend' },
  { nickname: 'nikolaevigor', repo: 'nikolaevigor/yard-frontend' },
  { nickname: 'kapanaga', repo: 'kapanaga/yard-frontend' },
  { nickname: 'hik94dh', repo: 'hik94dh/yard-frontend' },
  { nickname: 'n-e-t-t-u-n-o', repo: 'n-e-t-t-u-n-o/yard-frontend' },
  { nickname: 'Pifan91', repo: 'Pifan91/yard-frontend' },
  { nickname: 'boldyrev-d', repo: 'boldyrev-d/yard-frontend' },
  { nickname: 'alekseevgeorgy', repo: 'alekseevgeorgy/yard-frontend' },
  { nickname: 'zh0h', repo: 'zh0h/yard-frontend' },
  { nickname: 'ksshchk', repo: 'ksshchk/yard-frontend' },
  { nickname: 'MICHAspb', repo: 'MICHAspb/yard-frontend', isDisabled: true },
];

const emojis = generateEmojis({ count: results.length });
const emojis2 = generateEmojis({ count: results2.length });

export default () =>
  (<Block>
    <H2>Результат</H2>
    <p>
      Научитесь делать средние веб-приложения: интернет-магазины, ЦРМ-системы, лэндинги.
    </p>
    <p>
      Джуниоры найдут работу от 30к/мес,
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

    <Block size="xs">
      <H3>Первый майский поток</H3>
      <p>В мае мы делали магазин адидаса. Было охуенно, вот некоторые работы ребят:</p>
      <Results>
        {results.map(({ nickname, repo }, index) =>
          <Result repo={repo} key={nickname} emoji={emojis[index]}>{nickname}</Result>,
        )}
      </Results>
      <p>
        И отзывы, конечно: <Break />
        <a href="https://vk.com/wall52708366_1930" target="_blank" rel="noopener noreferrer">
          vk.com/wall52708366_1930
        </a>
      </p>
    </Block>
    <Block size="xs">
      <H3>Второй поток</H3>
      <p>
        В начале июня я собрал маленькую группу из 22 людей, чтобы попробовать новый формат. Мы
        делаем сайт агентства недвижимости.
      </p>
      <p>Мы на втором этапе, туда прошёл 21 человек.</p>
      <ul>
        <li>
          Миша Капанага рассказывает о своих впечатлениях от первого этапа{' '}
          <a href="https://medium.com/@kapanaga/9b89d1db738f">на Медиуме</a>,
        </li>
        <li>
          Янис Вестфальский хорошо рассказал про наш формат{' '}
          <a href="https://medium.com/@redlan/333abeabd619">там же</a>,
        </li>
        <li>
          Женя Угренинов —{' '}
          <a href="http://www.facebook.com/negenii/posts/1021329939762960">
            в Фейсбуке
          </a>,
        </li>
        <li>
          Стас Говорухин{' '}
          <a href="https://www.facebook.com/unityboxy/posts/501084583557062">
            там же
          </a>,
        </li>
        <li>
          И остальные ребята:{' '}
          <a href="https://vk.com/topic-148690438_35686099">
            vk.com/topic-148690438_35686099
          </a>

        </li>
      </ul>
      <br />
      <Results>
        {results2.map(({ nickname, repo, isDisabled }, index) =>
          (<Result repo={repo} key={nickname} emoji={emojis2[index]} isDisabled={isDisabled}>
            {nickname}
          </Result>),
        )}
      </Results>
    </Block>
    <Block size="xs">
      <H3>Третий поток</H3>
      <p>Ты? У нас мало мест.</p>
    </Block>
  </Block>);
