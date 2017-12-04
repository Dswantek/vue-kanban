var  models = require('../config/constants').models
let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
	text: { type: String, required: true },
	created: { type: Number, default: Date.now() },
    // Relations
    taskId: { type: ObjectId, ref: models.task, required: true },
    listId: { type: ObjectId, ref: models.list, required: true },
    boardId: { type: ObjectId, ref: models.board, required: true }
});

module.exports = mongoose.model(models.comment.name, schema);