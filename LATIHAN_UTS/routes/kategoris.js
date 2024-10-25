var express = require('express');
var router = express.Router();

const mahasiswaController = require('../controllers/kategoricontroller');

router.get("/", kategoricontroller.index); 
router.post("/insert", kategoricontroller.insert);

module.exports = router;
