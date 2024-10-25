var express = require('express');
var router = express.Router();

const kategoriController = require('../controllers/kategoricontroller');

router.get("/", kategoriController.index); 
router.post("/insert", kategoriController.insert);

module.exports = router;
