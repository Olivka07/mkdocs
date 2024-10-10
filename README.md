# Project with MkDocs and github actions

1) Написана собственная тема с использованием библиотеки React и сборщика webpack, который позволяет минифицировать css- и html-файлы;
2) Разработан и описан пайплайн развёртывания в .github/workflows/mkdocs-actions.yml, осуществляемый с помощью GitHub Actions, который триггерится на push в ветку main и включает:
   - одну джобу build
   - джоба включает следующие шаги:
     + step1: actions/checkout@v3 - предоставляет рабочему процессу доступ до репозитория
     + step2: actions/setup-node@v4 - установка Node
     + step3: npm ci - установка необходимых зависимостей
     + step4: npm run build - запуск скрипта для сборки минифицированных html и css файлов с помощью webpack
     + step5: actions/setup-python@v4 - установка Python
     + step6: pip install mkdocs - установка статического генератора mkdocs
     + step7: mkdocs build - запуск сборки с помощью mkdocs на основе сгенерированных минифицированных файлов
     + step8: actions/upload-pages-artifact@v3 - действие для упаковки и загрузки артефакта, который можно развернуть на GitHub Pages
     + step9: actions/deploy-pages@v4 - деплой на GitHub Pages
