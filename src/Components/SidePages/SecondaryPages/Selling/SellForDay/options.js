export default {
    tHead: {
        sum_id : { label: 'ID', sortable: false },
        photo: { label: 'Фото', sortable: false },
        brand : { label: 'Бренд', sortable: true },
        model : { label: 'Модель', sortable: true },
        type : { label: 'Тип', sortable: false },
        size : { label: 'Размер', sortable: false },
        color : { label: 'Цвет', sortable: false },
        sold_at: { label: 'Дата продажи', sortable: true },
        price_arrival: { label: 'Цена товара', sortable: true },
        price_sell: { label: 'Цена продажи', sortable: true }
    },

    page: 'sell',
    subPage: 'perDay',
    key: 'sum_id'
}