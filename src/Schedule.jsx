import React from 'react';
import { H2, H3 } from './ui/Heading';
import Block from './ui/Block';

export default () =>
  (<Block>
    <H2>Расписание</H2>
    <section>
      <p>
        Курс делится на 4 этапа по неделе.
        В день нужно уделять 3-4 часа.
      </p>
      <p>
        В понедельник в 12:00 я даю задание и объясняю как его делать.
        Я проверяю задания четырежды в сутки.
      </p>
      <p>
        Дедлайн — суббота, 23:59:59. Воскресенье — обязательный выходной.
      </p>
      <p>
        Не сделал — вылетаешь. Сделал на отъебись — вылетаешь. Без исключений.
        Считайте меня приёбистым заказчиком (которых у вас будет очень много).
      </p>

      <Block size="md">
        <H3>Нулевой этап: подготовка (19−25 июня)</H3>
        <div className="list">
          <p>
            Познакомимся друг с другом, поставим редактор для кода,
            настроим Гит и заведём тестовый проект на Гитхабе.
          </p>
        </div>
      </Block>
      <Block size="md">
        <H3>Первый: вёрстка (26 июня — 2 июля)</H3>
        <div className="list">
          <p>
            Сверстаем сайт.
          </p>
        </div>
      </Block>
      <Block size="md">
        <H3>Второй: Реакт (3−9 июля)</H3>
        <div className="list">
          <p>
            Мы разобьём нашу вёрстку на компоненты в <a href="http://reactjs.org/">Реакте</a>,
            сделаем роутинг через{' '}
            <a href="https://reacttraining.com/react-router/">реакт-роутер4</a> и перенесём стили в{' '}
            <a href="http://styled-components.com/">стайлед-компонентс</a>.
          </p>
          <p>
            <i>
              Короче, у нас тут самые последние модные технологии.
            </i>
          </p>
        </div>
      </Block>
      <Block size="md">
        <H3>Третий: джаваскрипт и интерфейс (10−16 июля)</H3>
        <div className="list">
          <p>
            Сделаем все эти карусели, модальные окна и прочее.
          </p>
        </div>
      </Block>
      <Block size="md">
        <H3>Четвёртый: джаваскрипт и данные (17−23 июля)</H3>
        <div className="list">
          <p>
            Данные о жилых комплексах должны откуда-то приходить?
            Для этого мы будем запрашивать данные с сервера по HTTP и хранить у себя.
          </p>
        </div>
      </Block>
    </section>
  </Block>);
