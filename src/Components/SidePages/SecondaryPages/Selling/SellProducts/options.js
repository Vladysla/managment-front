export default {
    tHead: {
        id: { label: 'Выбор', sortable: false, selected: true },
        brand : { label: 'Бренд', sortable: true },
        model: { label: 'Модель', sortable: true },
        type: { label: 'Тип товара', sortable: false },
        color: { label: 'Цвет', sortable: false },
        size: { label: 'Размер', sortable: false },
        price_arrival: { label: 'Цена товара', sortable: true },
        price_sell: { label: 'Цена продажи', sortable: true }
    },

    page: 'sell',
    subPage: 'products',
    key: 'sum_id'
}