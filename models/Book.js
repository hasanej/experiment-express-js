const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');

const bookSchema = new Schema({
	title : {
		type : String,
		required : true
	},
	author : {
		type : String,
		required : true
	},
	description : {
		type : String,
		required : true
	}
})

bookSchema.plugin(mongoosePaginate)

const Book = mongoose.model("book", bookSchema);

module.exports = Book;
