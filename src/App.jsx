import Header from './components/Header.jsx';
import Content from './components/Content.jsx';
import Image from './components/Image.jsx';
import GoodsGallery from './components/GoodsGallery.jsx';
import goods from './data/goods.js';

function App() {
    return (
        <>
            <nav className="tabs" aria-label="Завдання">
                <a href="#task1">Завдання 1 — ЛР №4 на React</a>
                <a href="#task2">Завдання 2 — галерея товарів</a>
            </nav>

            {/* Завдання 1: завдання ЛР №4 за допомогою компонентів Header, Content, Image */}
            <section id="task1" className="task">
                <Header
                    title="Лабораторна робота №7 — «Робота з React. Створення та робота з компонентами. Робота з props»"
                    author="Рудь Станіслав Сергійович"
                />
                <Content />
                <Image
                    src={`${import.meta.env.BASE_URL}images/kyiv.jpg`}
                    alt="Майдан Незалежності у Києві вночі"
                    href="https://kyivcity.gov.ua/"
                    caption="Майдан Незалежності, Київ. Фото: Maksym Kozlenko, Wikimedia Commons, CC BY-SA 4.0."
                />
            </section>

            {/* Завдання 2: галерея з компонентів GoodsCard, дані передаються через props */}
            <section id="task2" className="task">
                <GoodsGallery title="Завдання 2. Галерея товарів: спорттовари" items={goods} />
            </section>

            <footer className="footer">
                <p>&copy; 2026 Рудь Станіслав, ІП-44, варіант 122. Курс «Основи FE-технологій», КПІ ім. Ігоря Сікорського.</p>
            </footer>
        </>
    );
}

export default App;
