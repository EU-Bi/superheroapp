# superheroapp
# Инструкции по запуску проекта

Для запуска проекта выполните следующие шаги:

1. **Склонируйте репозиторий:** Склонируйте данный репозиторий на свой компьютер с помощью команды Git:

git clone https://github.com/EU-Bi/superheroapp.git

2. **Установите зависимости:** Перейдите в корневую папку проекта и установите необходимые зависимости, выполнив команду:

npm install

3. **Запустите сервер:** Для запуска сервера выполните команду:

npm run dev

4. **Запустите клиент:** Для запуска клиентской части проекта выполните команду:

npm start

Теперь ваш проект должен быть успешно запущен.

Удачи!

## Используемые библиотеки и технологии

### Бэкенд:
- **Express.js** (версия ^4.18.2): Фреймворк для создания веб-приложений на Node.js.
- **Express Validator** (версия ^7.0.1): Библиотека для валидации входных данных в Express.js.
- **MongoDB** (версия ^6.1.0): NoSQL база данных.
- **Mongoose** (версия ^7.5.2): ODM (Object Data Modeling) для MongoDB.
- **Multer** (версия ^1.4.5-lts.1): Middleware для обработки множественных файлов в Express.js.
- **Nodemon** (версия ^3.0.1): Утилита для автоматической перезагрузки сервера при изменениях в коде.

### Фронтенд:
- **React** (версия ^18.2.0): JavaScript библиотека для разработки пользовательских интерфейсов.
- **React DOM** (версия ^18.2.0): Библиотека для взаимодействия React с DOM.
- **React Redux** (версия ^8.1.2): Управление состоянием приложения в React.
- **React Router DOM** (версия ^6.16.0): Роутинг для веб-приложений на React.
- **Sass** (версия ^1.68.0): Препроцессор для стилей.
- **Web Vitals** (версия ^2.1.4): Инструмент для измерения качества пользовательского опыта.

### Фронтенд (UI и стили):
- **@emotion/react** (версия ^11.11.1): Библиотека для создания эмоциональных стилей (CSS-in-JS).
- **@emotion/styled** (версия ^11.11.0): CSS-in-JS библиотека для React компонентов.
- **@mui/icons-material** (версия ^5.14.9): Иконки для Material-UI.
- **@mui/material** (версия ^5.14.10): Компоненты и стили Material-UI.
- **@reduxjs/toolkit** (версия ^1.9.5): Упрощенная библиотека для управления состоянием Redux.
- **React Loader Spinner** (версия ^5.4.5): Компонент загрузки для React.
- **Axios** (версия ^1.5.0): HTTP клиент для выполнения запросов на бэкенд.

### Тестирование:
- **@testing-library/jest-dom** (версия ^5.17.0): Утилиты для тестирования с Jest.
- **@testing-library/react** (версия ^13.4.0): Утилиты для тестирования React компонентов.
- **@testing-library/user-event** (версия ^13.5.0): Событийная библиотека для тестирования пользовательских взаимодействий.
