import React from "react";

export default function WelcomeNews() {
  return (
    <div className="welcomeNews">
      <div className="welcomeNews__top">
        <span className="welcomeNews__top-title">Нещодавні новини</span>
        <span className="welcomeNews__top-more">Дивитися далі</span>
      </div>
      <div className="welcomeNews__bottom">
        <div className="welcomeNews__bottom-news">
          <p className="welcomeNews__bottom-news-title">Весна прийшла</p>
          <p className="welcomeNews__bottom-news-date">
            May 7, 2022 ⠀⠀ | ⠀⠀ #spring
          </p>
          <p className="welcomeNews__bottom-news-text">
            В Ботанічному саду вже йде підготовка до весни ☺️ Висаджуємо нові
            сорти тюльпанів 🌷 весна обіцяє бути яскравою 🌼
          </p>
          <img
            width={500}
            height={360}
            src="img/news/hat.jpg"
            alt="Зображення"
          />
        </div>

        <div className="welcomeNews__bottom-news">
          <p className="welcomeNews__bottom-news-title">Підготовка до весни</p>
          <p className="welcomeNews__bottom-news-date">
            May 7, 2022 ⠀⠀ | ⠀⠀ #flowers
          </p>
          <p className="welcomeNews__bottom-news-text">
            В Ботанічному саду 💚 вже прокинулись, зачаровуючи своєю ніжністю і
            жагою до життя перші весняні квіточки!
          </p>
          <img
            width={500}
            height={360}
            src="img/news/bell.jpg"
            alt="Зображення"
          />
        </div>
      </div>
    </div>
  );
}
