const asyncHandler = require("express-async-handler");
const kullaniciModel = require("../models/kullaniciModel");
const { create } = require("../models/notModel");
const notModel = require("../models/notModel");

const getNotlar = asyncHandler(async (req, res) => {
  const notlar = await notModel.find({ kullanici: req.user.id }); //kullanici kendi idsine göre filtrelenip başka kullanıcıların notlarını göremeyecek
  res.status(200).json(notlar);
});

const setNotlar = asyncHandler(async (req, res) => {
  if (!req.body.baslik || !req.body.aciklama) {
    res.status(400);
    throw new Error("lütfen baslik ve açıklama  alanını boş bırakmayınız");
  }
  const not = await notModel.create({
    baslik: req.body.baslik,
    aciklama: req.body.aciklama,
    oncelik: req.body.oncelik,
    kullanici: req.user.id,
  });
  res.status(200).json(not);
});

const deleteNotlar = asyncHandler(async (req, res) => {
  const not = await notModel.findById(req.params.id);
  const kullanici = await kullaniciModel.findById(req.user.id);
  if (not.kullanici.toString() !== kullanici.id) {
    res.status(400);
    throw new Error("kullanici yetkili değil");
  }

  if (!not) {
    res.status(400);
    throw new Error("böyle bir not bulunamadı");
  }
  const silindi = await notModel.findByIdAndRemove(req.params.id);

  res
    .status(200)
    .json({ message: `haydar ba ba silindi ${req.params.id}`, silindi });
});
const updateNotlar = asyncHandler(async (req, res) => {
  const not = await notModel.findById(req.params.id);
  const kullanici = await kullaniciModel.findById(req.user.id);
  if (!kullanici) {
    res.status(400);
    throw new Error("böyle bir kullanıcı  bulunamadı");
  } else {
  }
  if (!not) {
    res.status(400);
    throw new Error("böyle bir not bulunamadı");
  }
  if (not.kullanici.toString() !== kullanici.id) {
    res.status(400);
    throw new Error("kullanici yetkili değil");
  }
  const guncellendi = await notModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json({ message: `güncellendi ${req.params.id}` });
});

module.exports = {
  getNotlar,
  deleteNotlar,
  updateNotlar,
  setNotlar,
};
