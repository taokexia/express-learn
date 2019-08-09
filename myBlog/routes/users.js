const express = require("express")
const router = express.router()

router.get("/:name", function(req, res) {
	res.send("hello," + req.params.name)
})