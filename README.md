#ТЕХНОЛОГИИ
<br>
React 16
React-dom 16
React-redux
TypeScript
Less

#ЗАПУСК ПРОЕКТА через Docker
создание образа
docker build -t webpack_2 .

запуск на 8080 порту.
docker run -p 8080:{{тут указывается номер порта из wbpack.config}} {{id_container}}
docker run -p 8080:8080 webpack_1 - пример
