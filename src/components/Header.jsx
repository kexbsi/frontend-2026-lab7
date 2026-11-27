// Компонент Header — функціональний (function component).
// Отримує заголовок і ПІБ через props.
// Елементи сторінки за порядком: 1 — <h1>, 2 — <h2> з ПІБ.
function Header({ title, author }) {
    return (
        <header className="header">
            <h1>{title}</h1>
            <h2>{author}</h2>
        </header>
    );
}

export default Header;
