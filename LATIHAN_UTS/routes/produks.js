var express = require('express');
var router = express.Router();

const mahasiswaController = require('../controllers/produkcontroller');

router.get("/", produkcontroller.index); 
router.post("/insert", produkcontroller.insert);

module.exports = router;
