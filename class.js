/*/ Создать класс данных “Товар”
        C полями
         Название
         Цена
         Количество
         Описание

        Наполнить массив объектами такого класса.

        Написать метод, который получает строку вида
        "name-contains-fd&price-=2&quantity->5&description-ends-abc" 
        “name-starts-fd&quantity=5”
        На выходе возвращает массив, только с подходящими объектами
        возможны (contains, starts, ends для строковых и <, =, >, <=, >= для числовых)
        добавить.и удалить
*/
let items = [];
class Goods {
    constructor(name, price, quantity, description) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    };

    getProduct(queryString) {
        console.log(queryString);
        return items;
    }

}

items.push(new Goods('Milk', 150, 4, 'Fat no less than 3%'));
items.push(new Goods('apple', 240, 2, 'red, Spain'));
items.push(new Goods('pear', 50, 14, 'new sort'));
items.push(new Goods('cheese', 43, 34, 'Holland, discount 15%'));
// Goods.items.push( new Goods('Milk', 150, 4, 'Fat no less than 3%'));
// Goods.items.push( new Goods('Milk', 150, 4, 'Fat no less than 3%'));
// let bag2 = new Goods('apple', 240, 2, 'red, Spain');
// let bag3 = new Goods('pear', 50, 14, 'new sort');
// let bag4 = new Goods('cheese', 43, 34, 'Holland, discount 15%');
// let bag5 = new Goods('potato', 30, 12, 'Egypt, grey, 1 bag only');
// let bag6 = new Goods('carrot', 26, 7, 'Big big VERY BIg');
let result = Goods.prototype.getProduct('name-contais');

// console.log(bag1, bag2, bag3, bag4, bag5, bag6);
// let weekGoods = [];
// weekGoods.push(bag1);
// weekGoods.push(bag2);
// console.log(weekGoods);