var express = require('express');
var router = express.Router();

const transaksiController = require('../controllers/transaksicontroller');

router.get("/", transaksiController.index); 
router.post("/insert", transaksiController.insert);

module.exports = router;
