const kullaniciModel = require("../models/kullaniciModel");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const tokenOlustur = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};
const registerKullanici = asyncHandler(async (req, res) => {
  const { kullaniciAd, email, parola } = req.body;

  if (!kullaniciAd || !email || !parola) {
    //boş mu gelmiş mi diye konrol ettik
    res.status(400);
    throw new Error("lütfen geçerli alanları doldurun");
  }
  const kullanici = await kullaniciModel.findOne({ email }); //emaili dbden bulup varlığını kontrol ettik
  if (kullanici) {
    res.status(400);
    throw new Error("bu email var yeruhe int ");
  }
  const salt = await bcrypt.genSalt(11); //kaç kere döneceği
  const sifrelenmisParola = await bcrypt.hash(parola, salt); //parolamızı şifreledik ve başka değere attık

  const yeniKullanici = await kullaniciModel.create({
    //kullanicimizi oluşturduk
    kullaniciAd, //bunlar kullaniciAd:kullaniciAd olduğu için yazımdan aynısını yaptık
    email,
    parola: sifrelenmisParola,
  });
  if (yeniKullanici) {
    res.status(201).json({
      _id: yeniKullanici.id,
      kullaniciAd: yeniKullanici.kullaniciAd,
      email: yeniKullanici.email,
      token: tokenOlustur(yeniKullanici._id),
    }); //yeni kullanıcımızı döndürdük
  } else {
    res.status(400);
    throw new Error("kullanici kayıt edilemedi");
  }
});

const loginKullanici = asyncHandler(async (req, response) => {
  const { email, parola } = req.body;
  const kullanici = await kullaniciModel.findOne({ email }); //kullanicimizi emaile göre yakaladık

  if (kullanici && (await bcrypt.compare(parola, kullanici.parola))) {
    //compare ile bodyden gelen ğarolayla modeldeki parolaları eşleştirdik

    response.status(200).json({
      _id: kullanici.id,
      kullaniciAd: kullanici.kullaniciAd,
      email: kullanici.email,
      token: tokenOlustur(kullanici._id),
    }); //yeni kullanıcımızı döndürdük
  } else {
    response.status(400);
    throw new Error("lütfen email ya da parolayı kontrol ediniz");
  }
});

const getKullanici = asyncHandler(async (req, response) => {
  const { _id, kullaniciAd, email } = await kullaniciModel.findById(
    req.user.id
  );
  response.json({
    id: _id,
    kullaniciAd,
    email,
  });
});
module.exports = { registerKullanici, loginKullanici, getKullanici };
