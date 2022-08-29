import React from "react";

export default function Schedule() {
  return (
    <div className="schedule">
      <h2 className="schedule__title">
        Розклад роботи та вартість платних послуг
      </h2>

      <div className="schedule__content">
        <div className="schedule__content--form">
          <form action="post">
            <ul>
              <li>
                <h3>Оберіть дату екскурсії:</h3>
                <input type="date" />
              </li>
              <li>
                <h3>Оберіть час екскурсії:</h3>
                <input type="time" />
              </li>
              <li>
                <h3>Оберіть тип екскурсії:</h3>
                <select
                  name="excursion_type"
                  required=""
                  id="id_excursion_type"
                >
                  <option value="Індивідуальні відвідування" selected>
                    Індивідуальні відвідування
                  </option>
                  <option value="Екскурсія для дорослих">
                    Екскурсія для дорослих
                  </option>
                  <option value="Екскурсія для дітей">
                    Екскурсія для дітей
                  </option>
                  <option value="Проведення заходів">Проведення заходів</option>
                  <option value="Фото-відеозйомки">Фото-відеозйомки</option>
                </select>
              </li>
            </ul>
            <button type="Submit">Записатися на екускурсію</button>
            <p>
              Записатися на екскурсію можна мінімум за годину до кінця робочого
              дня
            </p>
          </form>
        </div>

        <div className="schedule__content--info">
          <div className="schedule__content--info--days">
            <div className="schedule__content--info--days--rectangle"></div>
            <div className="schedule__content--info--days--text">
              <h3>Робочі дні:</h3>
              <p>понеділок - п'ятниця</p>
            </div>
          </div>
          <div className="schedule__content--info--hours">
            <div className="schedule__content--info--hours--rectangle"></div>
            <div className="schedule__content--info--hours--text">
              <h3>Робочі години:</h3>
              <p>понеділок - четвер: 8:30 - 17:15</p>
              <p>п'ятниця: 8:30 - 16:00</p>
            </div>
          </div>
          <div className="schedule__content--info--weekend">
            <div className="schedule__content--info--weekend--rectangle"></div>
            <div className="schedule__content--info--weekend--text">
              <h3>Вихідні дні:</h3>
              <p>субота - неділя</p>
            </div>
          </div>
          <div className="schedule__content--info--price">
            <div className="schedule__content--info--price--rectangle"></div>
            <div className="schedule__content--info--price--text">
              <h3>Вартість послуг:</h3>
              <br />
              <p>Індивідуальні відвідування - 20 грн</p>
              <p>Екскурсія для дорослих - 20 грн</p>
              <p>Екскурсія для дітей - 15 грн</p>
              <p>Проведення заходів - 300 грн/год</p>
              <p>Фото-відеозйомки - 100 грн/год</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
