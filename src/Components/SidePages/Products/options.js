export default {
    tHead: {
        brand : { label: 'Бренд', sortable: true },
        model: { label: 'Модель', sortable: true },
        type: { label: 'Тип товара', sortable: false },
        price_arrival: { label: 'Цена товара', sortable: true },
        price_sell: { label: 'Цена продажи', sortable: true },
        arrival_count: { label: 'Приход', sortable: false },
        sell_count: { label: 'Продажа', sortable: false },
        remain: { label: 'Остаток', sortable: false }
    },
    page: 'main',
    key: 'product_id'
}