var express = require('express');
var router = express.Router();

const produkController = require('../controllers/produkcontroller');

router.get("/", produkController.index); 
router.post("/insert", produkController.insert);

module.exports = router;
