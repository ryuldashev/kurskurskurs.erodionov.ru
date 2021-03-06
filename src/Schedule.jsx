import React from 'react';
import { H2, H3 } from './ui/Heading';
import Block from './ui/Block';

export default () =>
  (<Block>
    <H2>Расписание</H2>
    <section>
      <p>Курс делится на 4 этапа по неделе. В день нужно уделять 3-4 часа.</p>
      <p>
        В понедельник в 12:00 я даю задание и объясняю как его делать. Я проверяю задания четырежды
        в сутки.
      </p>
      <p>Дедлайн — суббота, 23:59:59. Воскресенье — обязательный выходной.</p>
      <p>
        Не сделал — вылетаешь. Сделал на отъебись — вылетаешь. Без исключений. Считайте меня
        приёбистым заказчиком (которых у вас будет очень много).
      </p>

      <Block size="md">
        <H3>Нулевой этап: сбор и подготовка (24−30 июля)</H3>
        <div className="list">
          <p>
            Познакомимся друг с другом, поставим редактор для кода, настроим Гит и заведём тестовый
            проект на Гитхабе.
          </p>
        </div>
      </Block>
      <Block size="md">
        <H3>Первый: вёрстка (31 июля — 5 августа)</H3>
        <div className="list">
          <p>
            Интерфейсы начинаются с вёрстки, поэтому мы сверстаем наш сайт на старых добрых
            HTML/CSS. Здесь учимся работать с семантичностью, сеткой и консистентным неймингом.
          </p>
        </div>
      </Block>
      <Block size="md">
        <H3>Второй: Реакт (7−12 августа)</H3>
        <div className="list">
          <p>
            Мы разобьём нашу вёрстку на компоненты в <a href="http://reactjs.org/">Реакте</a>,
            сделаем роутинг через{' '}
            <a href="https://reacttraining.com/react-router/">реакт-роутер4</a> и перенесём стили в{' '}
            <a href="http://styled-components.com/">стайлед-компонентс</a>. Короче, у нас тут самые
            последние модные технологии.
          </p>
          <p>
            Почему Реакт идёт на второй неделе? Потому что это логично: сначала научиться верстать,
            а потом бить вёрстку на компоненты.
          </p>
        </div>
      </Block>
      <Block size="md">
        <H3>Четвёртый: джаваскрипт и данные (14−19 августа)</H3>
        <div className="list">
          <p>
            Данные о товарах должны откуда-то приходить? Научимся работать с АПИ и хранить данные в
            приложении.
          </p>
        </div>
      </Block>
      <Block size="md">
        <H3>Третий: джаваскрипт и интерфейс (21−25 августа)</H3>
        <div className="list">
          <p>Оживим интерфейс: сделаем все эти карусели, модальные окна и прочее. С анимациями.</p>
        </div>
      </Block>
    </section>
  </Block>);
