import React from 'react';
import { H2, H3 } from './ui/Heading';
import Paragraph from './ui/Paragraph';

export default () => (
  <Paragraph>
    <H2>Результаты курса</H2>
    <div className="paragraph-text">
      <p>
        После курса у ребят появляется настоящее портфолио с проектом, основаным на реальных
        задачах. Они создают свой первый (или нет) репозиторий на Гитхабе и учатся запускать
        готовый проект.
      </p>
    </div>
    <div className="results">
      <H3>1-й поток</H3>
      <div className="results-item">
        <div className="results-icon">&#127913;</div>
        <a className="results-link" href="" target="_blank">@zhabinskiy</a>
      </div>
      <div className="results-item">
        <div className="results-icon">&#127913;</div>
        <a className="results-link" href="" target="_blank">@disha1010</a>
      </div>
      <div className="results-item">
        <div className="results-icon">&#127913;</div>
        <a className="results-link" href="" target="_blank">@akiy</a>
      </div>
      <div className="results-item">
        <div className="results-icon">&#127913;</div>
        <a className="results-link" href="" target="_blank">@znskiy</a>
      </div>
      <div className="results-item">
        <div className="results-icon">&#127913;</div>
        <a className="results-link" href="" target="_blank">@zhakiy</a>
      </div>
      <div className="results-item">
        <div className="results-icon">&#127913;</div>
        <a className="results-link" href="" target="_blank">@akiy</a>
      </div>
    </div>
  </Paragraph>
);
