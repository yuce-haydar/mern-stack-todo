const mongoose = require("mongoose");
const KullaniciSchema = mongoose.Schema(
  {
    kullaniciAd: {
      type: String,
      required: [true, "lütfen kullanici adinizi giriniz"],
    },
    email: {
      type: String,
      required: [true, "lütfen email giriniz"],
      unique: true,
    },
    parola: {
      type: String,
      required: [true, "lütfen parolanızı giriniz"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Kullanicis", KullaniciSchema);
