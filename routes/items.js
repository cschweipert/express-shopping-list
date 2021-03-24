const express = require("express");
const router = express.Router();
const Item = require("../item");

router.get("", (req, res, next) => {
    return res.json({ items: Item.findAll() });
});

router.post("", (req, res, next) => {
    let newItem = new Item(req.body.name, req.body.price);
    return res.json({ item: newItem });
});

router.get("/:name", (req, res, next) => {
    let item = Item.find(req.params.name);
    return res.json({ item });
});

router.patch("/:name", (req, res, next) => {
    let item = Item.update(req.params.name, req.body);
    return res.json({ item });
});

router.delete("/:name", (req, res, next) => {
    Item.remove(req.params.name);
    return res.json({ message: "Deleted" });
});

module.exports = router;