import React from 'react';
import { H1, H2, H3 } from './ui/Heading';
import Paragraph from './ui/Paragraph';

export default () => (
  <main className="container">
    <H1>Курс по фронтенду</H1>

    <section className="content">
      <Paragraph>
        <H2>Цель</H2>
        <div className="paragraph-text">
          <p>
            Сделать интернет-магазин с двумя страницами: список товаров, страница товара.
          </p>
          <div className="list">
            <p>На этом проекте вы научитесь:</p>
            <ul>
              <li>верстать дизайн,</li>
              <li>запрашивать данные и хранить их,</li>
              <li>фильтровать и сортировать товары,</li>
              <li>
                работать с роутингом: показывать ту страницу, которую запросил человек.
              </li>
            </ul>
          </div>
        </div>
      </Paragraph>
      <Paragraph>
        <H2>Формат</H2>
        <div className="paragraph-text">
          <div className="description">
            <p>Курс делится на 4 этапа по неделе.</p>
            <p>
              На каждом этапе мы улучшаем проект как слоеный пирог: добавляем новую функциональность.
            </p>
            <p>
              В понедельник в 20:00 я даю задание и видос на 1 час, где объясняю как его делать. Дедлайн — воскресенье, 23:59.
            </p>
            <p>
              Не сделал — вылетаешь. Сделал на отъебись — вылетаешь. Без исключений, в реальном мире никто не будет слушать о непреодолимых проблемах, которые внезапно появились.
            </p>
            <p>
              Считайте меня приёбистым заказчиком (которых у вас будет очень много).
            </p>
          </div>
          <div className="stage">
            <H3>Первый этап: вёрстка</H3>
            <div className="list">
              <p>Сверстаем обе страницы. Научимся работать с:</p>
              <ul>
                <li>HTML,</li>
                <li>CSS: застилизуем все,</li>
                <li>модульной сеткой,</li>
                <li>
                  адаптивностью: у сайта будет мобильная и планшетная версии.
                </li>
              </ul>
            </div>
          </div>
          <div className="stage">
            <H3>Второй этап: Реакт</H3>
            <p>
              Реакт это библиотека от Фейсбука для работы с интерфейсами.
            </p>
            <p>
              Мы перенесём нашу вёрстку в реакт и разобьём её на компоненты.
            </p>
          </div>
          <div className="stage">
            <H3>Третий этап: разделяем вёрстку и данные</H3>
            <p>
              Список товаров и информация о них должны откуда-то приходить, мы же не будем их в вёрстке хранить? Для этого мы будем запрашивать данные с сервера.
            </p>
          </div>
          <div className="stage">
            <H3>Четвёртый этап: джаваскрипт</H3>
            <div className="list">
              <p>Этот этап самый сложный — здесь мы научимся:</p>
              <ul>
                <li>фильтровать и сортировать список объектов,</li>
                <li>добавим роутинг: разделение на страницы,</li>
                <li>
                  сделаем работу с формой заявки: со страницы товара пользователь оставляет заявку на звонок, а мы отправляем уведомление в Телеграм.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Paragraph>
      <Paragraph>
        <H2>Как оплатить?</H2>
        <div className="paragraph-text">
          <p>
            Заполни форму, подтверди перевод и я пришлю тебе инвайт в закрытую группу в Телеграме.
          </p>
          <p>
            Стоимость для первых 40 людей: 10 000 рублей.<br />
            Остальные: 12 500 рублей.
          </p>
        </div>
        <div className="paragraph-form">
          <form name="TinkoffPayForm">
            <label>
              Telegram:
              <input className="tinkoffPayRow" type="text" name="payTelegram" />
            </label>
            <label>
              GitHub:
              <input className="tinkoffPayRow" type="text" name="payGitHub" />
            </label>

            <input className="tinkoffPayRow" type="hidden" name="payOrder" />
            <input className="tinkoffPayRow" type="hidden" name="paySum" value="10000" />
            {/* <input
              className="tinkoffPayRow tinkoffPayButton"
              type="button"
              onClick="makePayment(document.TinkoffPayForm.paySum.value.replace(/,/ig,'.') * 100,
                  document.TinkoffPayForm.payOrder.value,
                  document.TinkoffPayForm.payTelegram.value,
                  document.TinkoffPayForm.payGitHub.value)"
              value="Оплатить"
            /> */}
          </form>
        </div>
      </Paragraph>
      <Paragraph>
        <H2>Кто с нами?</H2>
        <div className="paragraph-text">
          <p>
            <a href="https://rocketbank.ru/">Рокетбанк</a>
            {' '}
            10 мест. Офис в Москве, метро Менделеевская.
          </p>
          <p>
            <a href="http://gridly.ru/">Gridly.ru</a>
            {' '}
            1-2 места. Удалёнка или офис в Калининграде. Работают с Авиасейлз, LG, Алиэкспрессом и Додо Пиццей.
          </p>
          <p>
            Хочешь успеть отхватить охуенных джуниоров в конце мая? Напиши в Телеграм:
            <a href="https://t.me/evgenyrodionov">@evgenyrodionov</a>.
          </p>
        </div>
      </Paragraph>
      <Paragraph>
        <H2>Результаты курса</H2>
        <div className="paragraph-text">
          <p>
            После курса у ребят появляется настоящее портфолио с проектом, основаным на реальных задачах. Они создают свой первый (или нет) репозиторий на Гитхабе и учатся запускать готовый проект.
          </p>
        </div>
        <div className="reuslts">
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
    </section>
    <footer>
      <p>
        <small>
          ИП Родионов Евгений Викторович, ИНН 503621650441, ОГРНИП 315507400016220.
        </small>
      </p>
      <p>
        <small>
          С сайтом помогали участники первого потока курса.<br />
          Вёрстка страницы —
          {' '}
          <a href="https://github.com/disha1010" target="_blank">
            @disha1010
          </a>
          , вёрстка и подключение формы оплаты —
          {' '}
          <a href="https://github.com/zhabinskiy" target="_blank">
            @zhabinskiy
          </a>
          .
        </small>
      </p>
    </footer>
  </main>
);
