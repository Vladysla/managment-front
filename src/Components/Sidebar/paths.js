export default {
    default: [
        { link: '/', name: 'Показать все товары' },
        { link: '/place', name: 'Показать товары для точки' },
        { link: '/store', name: 'Добавить товары' },
        { link: 'transfer', name: 'Перемещение' },
        { link: 'sell', name: 'Продажа' }
    ],
    transfer: [
        { link: '/transfer/products', name: 'Переместить товары' },
        { link: '/transfer/income', name: 'Входящие перемещения' },
        { link: '/transfer/history', name: 'История перемещений' }
    ],
    sell: [
        { link: '/sell/products', name: 'Продать товары' },
        { link: '/sell/history', name: 'История продаж' },
        { link: '/sell/products', name: 'История всех продаж' }
    ]
}