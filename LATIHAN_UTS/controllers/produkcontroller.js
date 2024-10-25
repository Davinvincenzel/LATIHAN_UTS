const Produk = require('../models/produk');

exports.index = async (req, res) => {
  try {
    const produks = await Produk.find();
    if (!produks.length) {
      return res.status(200).json({ code: 200, message: "Success", data: [] });
    }
    res.status(200).json({ code: 200, message: "Success", data: produks });
  } catch (error) {
    res.status(500).json({ code: 400, message: "Failed" });
  }
};

exports.insert = async (req, res) => {
  const produk = new Produk({
    nama: req.body.nama,
    deskripsi: req.body.deskripsi,
    harga: req.body.harga,
    stok: req.body.stok,
    kategori_id: req.body.kategori_id
  });

  try {
    const newProduk = await produk.save();
    res.status(201).json({ code: 201, message: "Success", data: newProduk });
  } catch (err) {
    res.status(400).json({ code: 400, message: "Failed" });
  }
};