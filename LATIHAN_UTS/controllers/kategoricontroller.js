const Kategori = require('../models/kategori');

exports.index = async (req, res) => {
  try {
    const kategoris = await Kategori.find();
    if (!kategoris.length) {
      return res.status(200).json({ code: 200, message: "Success", data: [] });
    }
    res.status(200).json({ code: 200, message: "Success", data: kategoris });
  } catch (error) {
    res.status(500).json({ code: 400, message: "Failed" });
  }
};

exports.insert = async (req, res) => {
  const kategori = new Kategori({
    nama_kategori: req.body.nama_kategori,
    deskripsi: req.body.deskripsi,
    created_at: new Date(),
    updated_at: new Date(),
    status: true
  });

  try {
    const newKategori = await kategori.save();
    res.status(201).json({ code: 201, message: "Success", data: newKategori });
  } catch (err) {
    res.status(400).json({ code: 400, message: "Failed" });
  }
};