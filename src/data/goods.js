// Дані для галереї товарів. Фото — Wikimedia Commons (вільні ліцензії).
const commons = (file) =>
    `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=500`;

const goods = [
    {
        id: 1,
        name: 'Гантель алюмінієва',
        price: 1250,
        image: commons('Aluminium_Dumbbell.jpg'),
        credit: 'Designproduct, CC BY-SA 4.0',
    },
    {
        id: 2,
        name: 'Гиря 16 кг',
        price: 1480,
        image: commons('Kettlebell_truebalance_romeike.jpg'),
        credit: 'Detlef Romeike, CC BY-SA 2.5',
    },
    {
        id: 3,
        name: 'EZ-гриф для біцепса',
        price: 1990,
        image: commons('Curl-Hantel_-_SZ-Hantel.jpg'),
        credit: 'ch ivk, CC BY 3.0',
    },
    {
        id: 4,
        name: 'Диск для штанги',
        price: 1650,
        image: commons('Weight_plate_1.jpg'),
        credit: 'SAgbley, CC BY-SA 4.0',
    },
    {
        id: 5,
        name: 'Шейкер для протеїну',
        price: 290,
        image: commons('Osaka_protein_shaker.jpg'),
        credit: 'Karnaz, CC0',
    },
    {
        id: 6,
        name: 'Килимки й гумові стрічки',
        price: 890,
        image: commons("Grid_Layout_of_Blue_Barry's_Exercise_Mats_and_Resistance_Bands.jpg"),
        credit: 'Oleg Yunakov, CC BY-SA 4.0',
    },
];

export default goods;
