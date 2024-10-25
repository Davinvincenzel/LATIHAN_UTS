const mongoose = require('mongoose');

const transaksiSchema = new mongoose.Schema({
  produk_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Produk',
    required: true
  },
  deskripsi: {
    type: String
  },
  created_at: {
    type: Date
  },
  updated_at: {
    type: Date
  },
  status: {
    type: Boolean
  }
});

const Transaksi = mongoose.model('Transaksi', transaksiSchema);

module.exports = Transaksi;