#О ПРОЕКТЕ <br>
Данный проект СОЗДАЕТСЯ, как готовый шаблон, для работы на Реакте с классовыми компонентами

#ТЕХНОЛОГИИ <br>
React 16 <br>
React-dom 16 <br>
React-redux <br>
TypeScript <br>
Less <br>

#ЗАПУСК ПРОЕКТА через Docker <br>
создание образа <br>
docker build -t webpack_2 . <br>

запуск на 8080 порту. <br>
docker run -p 8080:{{тут указывается номер порта из wbpack.config}} {{id_container}} <br>
docker run -p 8080:8080 webpack_1 - пример
