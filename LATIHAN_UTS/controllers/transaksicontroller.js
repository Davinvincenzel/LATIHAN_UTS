const Transaksi = require('../models/transaksi');

exports.index = async (req, res) => {
  try {
    const transaksis = await Transaksi.find();
    if (!transaksis.length) {
      return res.status(200).json({ code: 200, message: "Success", data: [] });
    }
    res.status(200).json({ code: 200, message: "Success", data: transaksis });
  } catch (error) {
    res.status(500).json({ code: 400, message: "Failed" });
  }
};

exports.insert = async (req, res) => {
  const transaksi = new transaksi({
    produk_id: req.body.produk_id,
    pengguna_id: req.body.pengguna_id,
    jumlah: req.body.jumlah,
    total_harga: req.body.total_harga,
    tanggal_transaksi: req.body.tanggal_transaksi,
  });

  try {
    const newTransaksi = await transaksi.save();
    res.status(201).json({ code: 201, message: "Success", data: newTransaksi });
  } catch (err) {
    res.status(400).json({ code: 400, message: "Failed" });
  }
};