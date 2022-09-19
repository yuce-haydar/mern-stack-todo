const mongoose = require("mongoose");
const notSchema = mongoose.Schema(
  {
    kullanici: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Kullanicis",
    },
    baslik: {
      type: String,
      required: [true, "lütfen baslık giriniz"],
    },
    aciklama: {
      type: String,
      required: [true, "lütfen aciklama giriniz"],
    },
    oncelik: {
      type: Number,
    },
  },
  {
    timestamps: true, //default mongon db tutsun diye oluşturma ve güncelleme tarihletini öyle yaptık
  }
);

module.exports = mongoose.model("Not", notSchema); //expport etme Not ismiyle oluşacak ve notSchema ile çalışaccak
