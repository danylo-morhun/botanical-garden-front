import React from "react";

export default function Header() {
  return (
    <header>
      <div className="header__left">
        <div className="header__logo">
          <img src="img/header-logo.svg" alt="Логотип" />
        </div>
        <ul className="header__nav">
          <li>Новини</li>
          <li>Історія</li>
          <li>Структура</li>
          <li>Контакти</li>
        </ul>
      </div>
      <ul className="header__auth">
        <li>Увійти</li>
        <li>Реєстрація</li>
      </ul>
    </header>
  );
}
