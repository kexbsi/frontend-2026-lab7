# Основи FE-технологій — Лабораторна робота №7

- **Тема:** «Робота з React. Створення та робота з компонентами. Робота з props»
- **Студент:** Рудь Станіслав Сергійович, група ІП-44, варіант 122.

- Сайт (GitHub Pages): https://kexbsi.github.io/frontend-2026-lab7/

## Що зроблено

**Завдання 1.** Завдання ЛР №4 на React з компонентами:

| Компонент | Вид | Що робить |
|-----------|-----|-----------|
| [Header](src/components/Header.jsx) | function | Заголовок і ПІБ (props `title`, `author`) |
| [Content](src/components/Content.jsx) | class | Текст сторінки; кліки на 3-му і 4-му елементах змінюють кольори (`this.state`) |
| [Image](src/components/Image.jsx) | function | Фото й кнопки «Додати / Збільшити / Зменшити / Видалити» (`useState`) |

**Завдання 2.** Галерея з 6 товарів: [GoodsGallery](src/components/GoodsGallery.jsx) створює
[GoodsCard](src/components/GoodsCard.jsx) для кожного елемента з [goods.js](src/data/goods.js)
і передає фото, назву й ціну через props.

## Запуск локально

Потрібен Node.js 18+ і npm.

```bash
git clone https://github.com/kexbsi/frontend-2026-lab7.git
cd frontend-2026-lab7
npm install
npm start          # режим розробки: http://localhost:5173/frontend-2026-lab7/
npm run build      # збирання в папку dist
npm run preview    # перегляд зібраної версії
```

Проєкт створено на [Vite](https://vite.dev/) (сучасна заміна create-react-app).
Публікація на GitHub Pages — автоматично через GitHub Actions ([deploy.yml](.github/workflows/deploy.yml)).
