import React from 'react';

import { H2 } from './ui/Heading';
import Block from './ui/Block';

export default () =>
  (<Block>
    <H2>Формат</H2>
    <div className="paragraph-text">
      <p>
        Мы сделаем сайт интернет-магазина премиальной одежды{' '}
        <a href="https://uk.burberry.com/mens-clothing/" target="_blank" rel="noopener noreferrer">
          Бёрберри
        </a>. Продуманнее интерфейса у интернет-магазина я ещё не видел, поэтому этот проект будет
        крутым в вашем портфолио.
      </p>
      <div className="list">
        <p>На этом проекте люди учатся:</p>
        <ul>
          <li>
            <strong>верстать</strong>: семантично и аккуратно,
          </li>
          <li>
            <strong>работать с Реактом</strong>, роутингом, стайлед-компонентс, ЕСЛинтом, Трэвисом и
            прочими современными инструментами,
          </li>
          <li>
            <strong>писать бизнес-логику</strong>: запрашивать данные с АПИ и хранить их в
            приложении
          </li>
        </ul>
      </div>
    </div>
  </Block>);
