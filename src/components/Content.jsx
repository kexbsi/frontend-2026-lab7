import { Component } from 'react';

/* Компонент Content — класовий (class component), як вимагає завдання.
   Відтворює завдання 1 ЛР №4: варіант 122 → (122 mod 10) + 1 = 3.
   3-й елемент сторінки — абзац про дату народження, наступний (4-й) — абзац про освіту.
   Перший клік фарбує 3-й елемент у синій, 4-й — у зелений; кожен наступний клік
   міняє схему. Кількість кліків зберігається у стані компонента (this.state). */

const SCHEME_BLUE = { backgroundColor: '#1f3fbf', color: '#ffffff' };
const SCHEME_GREEN = { backgroundColor: '#2ecc40', color: '#000000' };

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = { thirdClicks: 0, fourthClicks: 0 };
        this.handleThirdClick = this.handleThirdClick.bind(this);
        this.handleFourthClick = this.handleFourthClick.bind(this);
    }

    handleThirdClick() {
        this.setState((state) => ({ thirdClicks: state.thirdClicks + 1 }));
    }

    handleFourthClick() {
        this.setState((state) => ({ fourthClicks: state.fourthClicks + 1 }));
    }

    /* Колір за кількістю кліків: 0 — без кольору, непарна — перша схема, парна — друга */
    static schemeFor(clicks, first, second) {
        if (clicks === 0) {
            return undefined;
        }
        return clicks % 2 === 1 ? first : second;
    }

    render() {
        const { thirdClicks, fourthClicks } = this.state;
        return (
            <main className="content">
                <section>
                    <p
                        className="clickable"
                        style={Content.schemeFor(thirdClicks, SCHEME_BLUE, SCHEME_GREEN)}
                        onClick={this.handleThirdClick}
                        title="Клікніть, щоб змінити кольори (3-й елемент)"
                    >
                        Народився 17 вересня 2007 року в місті Первомайськ Миколаївської області.
                    </p>
                    <p
                        className="clickable"
                        style={Content.schemeFor(fourthClicks, SCHEME_GREEN, SCHEME_BLUE)}
                        onClick={this.handleFourthClick}
                        title="Клікніть, щоб змінити кольори (4-й елемент)"
                    >
                        Закінчив Первомайський ліцей «Лідер». Зараз навчаюсь у Національному технічному
                        університеті України «Київський політехнічний інститут імені Ігоря Сікорського»
                        на факультеті інформатики та обчислювальної техніки, група ІП-44.
                    </p>
                </section>

                <section>
                    <h3>Мої хобі</h3>
                    <ul>
                        <li>Тренування у спортзалі</li>
                        <li>Програмування та веброзробка</li>
                        <li>Комп&apos;ютерні ігри</li>
                    </ul>
                </section>

                <section>
                    <h3>Улюблені фільми</h3>
                    <ol>
                        <li>«Легенда» (2015)</li>
                        <li>«Інтерстеллар» (2014)</li>
                        <li>«Темний лицар» (2008)</li>
                    </ol>
                </section>

                <section>
                    <h3>Найулюбленіше місто — Київ</h3>
                    <p>
                        Київ — столиця України та одне з найдавніших міст Східної Європи, якому понад
                        півтори тисячі років. Мені найбільше подобаються золоті бані Києво-Печерської
                        лаври та Михайлівського собору, Хрещатик і Майдан Незалежності, вечірні
                        прогулянки набережною Дніпра та краєвиди з Володимирської гірки.
                    </p>
                </section>
            </main>
        );
    }
}

export default Content;
