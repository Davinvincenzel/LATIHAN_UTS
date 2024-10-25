const mongoose = require('mongoose');

const pembayaranSchema = new mongoose.Schema({
  transaksi_id: {
    type: moongose.Schema.Types.ObjectId,
    ref : 'Transaksi',
    required: true
  },
  metode_pembayaran: {
    type: String
  },
  jumlah: {
    type: Number
  },
  tanggal_pembayaran: {
    type: Date
  },
  status: {
    type: String
  }
});

const Pembayaran = mongoose.model('Pembayaran', pembayaranSchema);

module.exports = Pembayaran;