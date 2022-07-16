import React from "react";

export default function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome__left">
        <div className="welcome__square"></div>
        <h2 className="welcome__title">Вітаємо у ботанічному саду ХДУ!</h2>
        <div className="welcome__text">
          Відчуй єднання людини з природою завітавши до ботанічного саду
          Херсонського державного університета.
        </div>
        <button className="welcome__button">Дізнатися розклад</button>
      </div>
      <div className="welcome__right">
        <img
          width={500}
          height={500}
          src="img/welcome-image.svg"
          alt="Ласкаво просимо"
        />
      </div>
    </div>
  );
}
