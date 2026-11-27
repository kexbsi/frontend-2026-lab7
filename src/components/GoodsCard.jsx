/* Картка товару. Усі дані приходять через props:
   image — адреса фото, name — назва, price — ціна в гривнях, credit — автор і ліцензія фото. */

const priceFormat = new Intl.NumberFormat('uk-UA', {
    style: 'currency',
    currency: 'UAH',
    maximumFractionDigits: 0,
});

function GoodsCard({ image, name, price, credit }) {
    return (
        <article className="goods-card">
            <img src={image} alt={name} loading="lazy" width={500} height={500} />
            <div className="goods-card__body">
                <h3 className="goods-card__name">{name}</h3>
                <p className="goods-card__price">{priceFormat.format(price)}</p>
                <p className="goods-card__credit">Фото: {credit}</p>
            </div>
        </article>
    );
}

export default GoodsCard;
