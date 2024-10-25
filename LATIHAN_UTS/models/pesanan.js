const mongoose = require('mongoose');

const pesananSchema = new mongoose.Schema({
  nama_supplier: {
    type: moongose.Schema.Types.ObjectId,
    ref : 'Supplier',
    required: true
  },
  produk_id: {
    type: moongose.Schema.Types.ObjectId,
    ref: 'Produk',
    required: true
  },
  jumlah: {
    type: Number
  },
  status: {
    type: String
  },
  tanggal_pesanan: {
    type: Date
  }
});

const Pesanan = mongoose.model('Pesanan', pesananSchema);

module.exports = Pesanan;