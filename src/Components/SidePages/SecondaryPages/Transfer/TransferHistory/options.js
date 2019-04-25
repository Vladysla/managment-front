export default {
    tHead: {
        from: { label: 'С точки', sortable: true },
        to: { label: 'В точку', sortable: true },
        date: { label: 'Дата', sortable: true },
        brand : { label: 'Бренд', sortable: true },
        model: { label: 'Модель', sortable: true },
        type: { label: 'Тип товара', sortable: false },
        color: { label: 'Цвет', sortable: false },
        size: { label: 'Размер', sortable: false },
        price_arrival: { label: 'Цена товара', sortable: true },
        price_sell: { label: 'Цена продажи', sortable: true }
    },

    page: 'transfer',
    subPage: 'history',
    key: 'id'
}