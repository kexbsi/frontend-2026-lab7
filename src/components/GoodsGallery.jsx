import GoodsCard from './GoodsCard.jsx';

/* Галерея: для кожного товару з масиву items створює GoodsCard
   і передає його поля через props (spread-оператор {...item}).
   key — унікальний ідентифікатор, потрібний React для списків. */
function GoodsGallery({ title, items }) {
    return (
        <>
            <h2>{title}</h2>
            <p className="gallery-note">Товарів: {items.length}</p>
            <div className="gallery">
                {items.map((item) => (
                    <GoodsCard key={item.id} {...item} />
                ))}
            </div>
        </>
    );
}

export default GoodsGallery;
