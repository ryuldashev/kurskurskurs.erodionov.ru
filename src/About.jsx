import React from 'react';

import { H2 } from './ui/Heading';
import Block from './ui/Block';

export default () => (
  <Block>
    <H2>Цель</H2>
    <div className="paragraph-text">
      <p>
        Сделать сайт агентства недвижимости как
        {' '}
        <a href="https://www.compass.com/development/" target="_blank" rel="noopener noreferrer">
          compass.com
        </a>
        {' '}
        с двумя страницами: список и информация жилых комплексов.
      </p>
      <div className="list">
        <p>На этом проекте вы научитесь:</p>
        <ul>
          <li>верстать дизайн,</li>
          <li>запрашивать данные и хранить их,</li>
          <li>фильтровать и сортировать ЖК,</li>
          <li>
            работать с роутингом: показывать ту страницу, которую запросил человек.
          </li>
        </ul>
      </div>
    </div>
  </Block>
);
