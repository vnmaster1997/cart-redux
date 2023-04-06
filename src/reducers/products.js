var initialState = [
    {
        id: 1,
        name: 'Iphone 7 Plus',
        image: 'https://vcdn-sohoa.vnecdn.net/2020/05/25/iPhone-12-Blue-2785-1590377566.jpg',
        description: 'Sản phẩm do apply sản xuất',
        price: 500,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: 'Samsung 7 Plus',
        image: 'https://vcdn-sohoa.vnecdn.net/2020/05/25/iPhone-12-Blue-2785-1590377566.jpg',
        description: 'Sản phẩm do samsung sản xuất',
        price: 400,
        inventory: 10,
        rating: 3
    },
    {
        id: 3,
        name: 'Oppo 7 Plus',
        image: 'https://vcdn-sohoa.vnecdn.net/2020/05/25/iPhone-12-Blue-2785-1590377566.jpg',
        description: 'Sản phẩm do china sản xuất',
        price: 300,
        inventory: 10,
        rating: 5
    }
]

const products = (state = initialState, action) => {
    switch (action.type) { 
        default: return [...state];
    }
}

export default products;