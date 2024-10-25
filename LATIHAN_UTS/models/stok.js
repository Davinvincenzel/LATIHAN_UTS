const mongoose = require('mongoose');

const stokSchema = new mongoose.Schema({
  produk_id: {
    type: moongose.Schema.Types.ObjectId,
    ref : 'Produk',
    required: true
  },
  jumlah: {
    type: Number
  },
  tanggal_update: {
    type: Date
  },
  keterangan: {
    type: String
  },
  lokasi: {
    type: String
  }
});

const Stok = mongoose.model('Stok', stokSchema);

module.exports = Stok;