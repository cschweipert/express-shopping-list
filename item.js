const db = require("./fakeDb");
const { NotFoundError } = require("./expressError");

class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;

        db.items.push(this);
    }

    static findAll() {
        return db.items;
    }

    static update(name, data) {
        let item = Item.find(name);
        if (item === undefined) throw new NotFoundError();

        item.name = data.name;
        item.price = data.price;

        return item;
    }

    static find(name) {
        let item = db.items.find(v => v.name === name);
        if (item === undefined) throw new NotFoundError();
        return item;
    }

    static remove(name) {
        let itemId = db.items.findIndex(v => v.name === name);
        if (itemId === -1) throw new NotFoundError();

        db.items.splice(itemId, 1);
    }
}

module.exports = Item;
