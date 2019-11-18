# e2-power-ups

Описание функциональности: https://stefaniuk.website/all/e2-power-ups/

**Планы**

- [ ] Добавить возможность открывать изображения из мини галереи на весь экран.
- [ ] Минифицировать файлы и выложить на github
- [ ] Добавлять новые фичи :-)

**Установка**

1. Разместите power-ups.css файлы в папке styles внутри нужной темы.
2. Разместить cuts.js файлы в папке js внутри нужной темы.
3. Отредактируйте файл layout.tmpl.php и добавте следующий код:
```
<?php _CSS ('power-ups') ?>
<?php _JS ('cuts') ?>
```

**Лицензия**

![wtfpl](http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-1.png)
