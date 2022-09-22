const AsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const kullanici = require("../models/kullaniciModel");

const kullaniciKontrol = AsyncHandler(async (req, res, next) => {
  let sifrelenmisToken;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer") //gönderilen veride tokeni yakalamaaya çalıştık
  ) {
    try {
      sifrelenmisToken = req.headers.authorization.split(" ")[1]; //Beraer token diye ayırdık
      const token = jwt.verify(sifrelenmisToken, process.env.JWT_SECRET); //tokeni doğrulattık secret keye göre
      req.user = await kullanici.findById(token.id).select("-parola"); //token idye göre buldurduk req user????
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("giriş yapılamaz token");
    }
  }
  if (!sifrelenmisToken) {
    res.status(401);
    throw new Error("giriş yapılamaz token bulunamadı");
  }
});

module.exports = {
  kullaniciKontrol,
};
