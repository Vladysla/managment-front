export default {
    default: [
        {
            link: '/',
            name: 'Показать все товары',
            protectedBy: 'manager',
        },
        {
            link: '/place',
            name: 'Показать товары для точки',
            protectedBy: 'manager',
        },
        {
            link: '/store',
            name: 'Добавить товары',
            protectedBy: 'admin',
        },
        {
            link: 'transfer',
            name: 'Перемещение',
            protectedBy: 'manager',
        },
        {
            link: 'sell',
            name: 'Продажа',
            protectedBy: 'manager',
        }
    ],
    transfer: [
        {
            link: '/transfer/products',
            name: 'Переместить товары',
            protectedBy: 'manager',
        },
        {
            link: '/transfer/income',
            name: 'Входящие перемещения',
            protectedBy: 'manager',
        },
        {
            link: '/transfer/history',
            name: 'История перемещений',
            protectedBy: 'manager',
        }
    ],
    sell: [
        {
            link: '/sell/products',
            name: 'Продать товары',
            protectedBy: 'manager',
        },
        {
            link: '/sell/history',
            name: 'История продаж',
            protectedBy: 'manager',
        },
        {
            link: '/sell/allhistory',
            name: 'История всех продаж',
            protectedBy: 'admin',
        }
    ]
}