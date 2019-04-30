export default {
    tHead: {
        from_place: { label: 'С точки', sortable: true },
        to_place: { label: 'В точку', sortable: true },
        created_at: { label: 'Дата', sortable: true },
        brand : { label: 'Бренд', sortable: false },
        model: { label: 'Модель', sortable: false },
        type: { label: 'Тип товара', sortable: false },
        color: { label: 'Цвет', sortable: false },
        size: { label: 'Размер', sortable: false },
        status: { label: 'Статус', sortable: true }
    },

    page: 'transfer',
    subPage: 'history',
    key: 'id'
}