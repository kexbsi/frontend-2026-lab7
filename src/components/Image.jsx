import { useEffect, useRef, useState } from 'react';

/* Компонент Image — функціональний, з хуками useState, useRef і useEffect.
   Відтворює завдання 2 ЛР №4: кнопки «Додати», «Збільшити», «Зменшити», «Видалити».
   Замість ручної роботи з DOM (createElement, remove) React сам перемальовує
   розмітку, коли змінюється стан: visible (чи є зображення) і width (ширина). */

const INITIAL_WIDTH = 640;
const MIN_WIDTH = 160;
const STEP = 1.2;

function Image({ src, alt, href, caption }) {
    const [visible, setVisible] = useState(true);
    const [width, setWidth] = useState(INITIAL_WIDTH);
    const [maxWidth, setMaxWidth] = useState(INITIAL_WIDTH);
    const figureRef = useRef(null);

    // Доступна ширина блока <figure>: вимірюємо після монтування і при зміні розміру вікна
    useEffect(() => {
        const figure = figureRef.current;
        const update = () => setMaxWidth(figure.clientWidth);
        update();
        const observer = new ResizeObserver(update);
        observer.observe(figure);
        return () => observer.disconnect();       // прибирання при демонтуванні
    }, []);

    const clamp = (value) => Math.round(Math.min(Math.max(value, MIN_WIDTH), maxWidth));
    const shown = Math.min(width, maxWidth);      // фактична ширина (не ширша за блок)

    return (
        <figure className="photo" ref={figureRef}>
            {visible && (
                <a href={href} target="_blank" rel="noopener noreferrer">
                    <img src={src} alt={alt} width={640} height={427} style={{ width: `${width}px` }} />
                </a>
            )}

            <div className="photo-controls">
                <button type="button" onClick={() => { setWidth(INITIAL_WIDTH); setVisible(true); }} disabled={visible}>
                    Додати
                </button>
                <button type="button" onClick={() => setWidth((w) => clamp(Math.min(w, maxWidth) * STEP))} disabled={!visible || shown >= maxWidth}>
                    Збільшити
                </button>
                <button type="button" onClick={() => setWidth((w) => clamp(Math.min(w, maxWidth) / STEP))} disabled={!visible || shown <= MIN_WIDTH}>
                    Зменшити
                </button>
                <button type="button" onClick={() => setVisible(false)} disabled={!visible}>
                    Видалити
                </button>
                <span className="photo-status" aria-live="polite">
                    {visible ? `Ширина: ${shown} px` : 'Зображення видалено'}
                </span>
            </div>

            <figcaption>{caption}</figcaption>
        </figure>
    );
}

export default Image;
