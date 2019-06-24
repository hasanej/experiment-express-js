const router = require('express').Router();
const Book = require('../models/Book');

//Get all book
router.get("/", (req, res) => {
	const {page, perpage, sort} = req.query;

	Book.paginate({}, {
		page: parseInt(page, 10),
		limit: parseInt(perpage, 10),
		sort: {title: parseInt(sort)}
	})
	.then(result => res.send(result.docs))
})

//Add book
router.post("/", (req, res) => {
	Book.create(req.body)
	.then(data => res.send(data))
})

//Edit book
router.get("/edit/:id", (req, res) => {
	Book.findById({_id: req.params.id})
	.then(data => res.send(data))
})

//Update book
router.put("/edit/:id", (req, res) => {
	Book.findByIdAndUpdate({_id: req.params.id}, {
		$set: {
			title: req.body.title,
			author: req.body.author,
			description: req.body.description
		}
	})
	.then(data => {
		Book.find({}).sort({title: 1})
		.then(data => res.send(data))
	})
})

router.delete("/:id", (req, res) => {
	const id = req.params.id
	Book.findByIdAndRemove(id)
	.then(data => res.send("Book Deleted"))
})

module.exports = router;
