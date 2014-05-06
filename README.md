## Плагин для Noscript, включающий полифилл для HTML5 History API

В Noscript для смены URL в адресной строке используется HTML5 History API,
который не поддерживается [в IE раньше 10](http://caniuse.com/#feat=history).

В качестве полифилла используется[devote/HTML5-History-API](https://github.com/devote/HTML5-History-API).
Скрипт предоставляет стандартизированное API и будет использовать смену
хеш-фрагмента URL для навигации, например:

    /notes/141 -> /#/notes/141

### Подключение

Достаточно подключить скрипты полифилла и плагина после подключения Noscript:

```html
<script src="node_modules/noscript/dist/noscript.js"></script>
<script src="node_modules/html5-history-api/history.js"></script>
<script src="node_modules/ns-history-polyfill/ns-history-polyfill.js"></script>
```
