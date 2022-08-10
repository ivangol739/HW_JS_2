const goods = {
    1: {
        id: 1,
        name: 'Футболка',
        description: 'С Риком и морти',
        sizes: [44, 46, 48],
        price: 2200,
        available: true,
    },
    2: {
        id: 2,
        name: 'Штаны',
        description: 'Как у Стива Джобса',
        sizes: [40, 42, 44],
        price: 5000,
        available: true,
    },
    3: {
        id: 3,
        name: 'Кроссовки',
        description: 'Джорданы',
        sizes: [41, 42, 43],
        price: 12000,
        available: false,
    },
    4: {
        id: 4,
        name: 'Куртка',
        description: 'Для сноубордиста',
        sizes: [48, 42, 50],
        price: 17000,
        available: true,
    },
    5: {
        id: 5,
        name: 'Кепка',
        description: 'Для игры в теннис',
        sizes: [38, 39, 48],
        price: 1800,
        available: false,
    },
}

const basket = [
    {
        good: goods[1].id,
        amount: 3,
    },
    {
        good: goods[2].id,
        amount: 5,
    }
]

let countId = Object.keys(goods).length;

function addGoodInBasket(id, size, amount) {
    for (let i = 1; i <= countId; i++) {
        if (id === goods[i].id && goods[i].available == true && goods[i].sizes.includes(size) == true) {
            basket.push({'good': goods[i].id, 'amount': amount})
        }
    }
}

addGoodInBasket(4,48,3);
console.log(basket)

function deleteGoodFromBasket(id) {
    for (let i = 0; i < basket.length; i++) {
        if (basket[i].good == id) {
            delete basket[i]
        }
    }
}

// deleteGoodFromBasket(1)
// console.log(basket)

function cleanBasket() {
    for (let i = 0; i < basket.length; i++) {
        delete basket[i]
    }
}

// cleanBasket()
// console.log(basket)

function totalAmountSum() {
    let n = 0
    let s = 0
    for (let i = 0; i < basket.length; i++) {
        n += basket[i].amount
        for (let j = 1; j <= countId; j++) {
            if (goods[j].id === basket[i].good) {
                s += basket[i].amount * goods[j].price
            }
        }
    }
    return resulte = {
        totalAmount: n,
        totalPrice: s,
    }
}

totalAmountSum()
console.log(resulte)