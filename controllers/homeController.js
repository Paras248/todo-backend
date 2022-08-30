const BigPromise = require("../middlewares/bigPromise");
const CustomError = require("../utils/customError");
const Todo = require("../models/todo");

exports.getItems = BigPromise(async (req, res, next) => {
    const todoItems = await Todo.find();
    if (!todoItems) {
        return next(new CustomError("No items found", 400));
    }
    res.status(200).json(todoItems);
});

// to post the todo item in the database
exports.postItem = BigPromise(async (req, res, next) => {
    const title = req.body.title;
    const description = req.body.description;

    if (!title) {
        return next(new CustomError("Please Provide a title to submit", 400));
    }

    const postObject = {
        success: true,
        title,
        description,
    };

    const response = await Todo.create(postObject);

    res.status(201).send(response);
});
