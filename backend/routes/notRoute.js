const express = require("express");
const { deleteModel } = require("mongoose");

const router = express.Router();

const {
  getNotlar,
  setNotlar,
  updateNotlar,
  deleteNotlar,
} = require("../controllers/getControllers");
const { kullaniciKontrol } = require("../middlewares/authMiddleware");

router.get("/", kullaniciKontrol, getNotlar);

router.post("/", kullaniciKontrol, setNotlar);
//router.route(/).get(getNotlar).set(setNotlar) ======>buna zincirleme route deniyor
router.put("/:id", kullaniciKontrol, updateNotlar);

router.delete("/:id", kullaniciKontrol, deleteNotlar);
//router.route(/:id).put(putNotlar).delete(deleteNotlar) ======>buna zincirleme route deniyor

module.exports = router;
