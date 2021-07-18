const { Router } = require("express");
const User = require("@m/user");
const tokenPasswordRecovery = require("@m/token-password-recovery");
const jwt = require("jsonwebtoken");
const router = Router();
const baseURL = require("@c/baseURL");
const email = require("@lib/email");
const TOKEN_SECRET_KEY = require("@c/secret");
const multer = require("multer");
const path = require("path");
const createHash = require("hash-generator");
const bcryptjs = require("bcryptjs");
const SALT_ROUNDS = 12;
const SECRET_KEY_FOR_PASSWORD = "kosdoewm,c";

const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "./../../files"));
  },
  filename: function (req, file, cb) {
    req.fileName = req.user._id + "_hash_" + createHash(4) + path.extname(file.originalname);
    cb(null, req.fileName);
  },
});
let upload = multer({ storage: storage });

// edit/change logo
router.post("/api/upload", upload.single("img"), async (req, res) => {
  try {
    const id = req.user._id;
    await User.findByIdAndUpdate(id, { $set: { logo: req.fileName } }, { new: true });
    let user = await User.findById(id);
    user = JSON.parse(JSON.stringify(user));
    user.logo = req.fileName;
    delete user.password;

    // clearing old files
    const linkToFiles = path.join(__dirname, "../../files");

    fs.readdir(linkToFiles, (err, files) => {
      if (err) return console.log(err);
      files.forEach((fileName) => {
        if (fileName.includes(id) && fileName !== req.fileName) {
          const file = path.join(linkToFiles, fileName);
          fs.unlink(file, (err) => err && console.log(err));
        }
      });
    });

    res.status(200).send({ user, token: jwt.sign(user, TOKEN_SECRET_KEY), result: true });
  } catch (e) {
    console.log(e);
    res.status(501).send({ result: false });
  }
});

router.use(multer().array());

router.get("/api/checkLogin/:login", async (req, res) => {
  try {
    let user = await User.findOne({ login: req.params.login });
    if (user) {
      res.status(200).send({ result: true });
    } else {
      res.status(200).send({ result: false });
    }
  } catch (e) {
    res.status(501).send({ result: false });
  }
});

router.get("/api/checkEmail/:email", async (req, res) => {
  try {
    let user = await User.findOne({ email: req.params.email });
    if (user) {
      res.status(200).send({ result: true });
    } else {
      res.status(200).send({ result: false });
    }
  } catch (e) {
    res.status(501).send({ result: false });
  }
});

router.get("/api/check-user", async (req, res) => {
  try {
    const id = "user" in req ? req.user._id : null;
    if (!id) return res.status(200).send({ result: false });
    let user = await User.findById(id);
    if (user) {
      user = JSON.parse(JSON.stringify(user));
      delete user.password
      res.status(200).send({ result: true, user});
    } else {
      res.status(200).send({ result: false });
    }
  } catch (e) {
    console.log(e);
    res.status(501).send({ result: false });
  }
});

// Update User
router.put("/api/update-user", async (req, res) => {
  try {
    const id = req.user._id;
    const { name, surname, birthday, gender } = req.body;
    let user = await User.findById(id);

    if (user) {
      await User.findByIdAndUpdate(
        id,
        { $set: { name: name, surname: surname, birthday: birthday, gender: gender } },
        { new: true },
        function (err) {
          if (err) return res.status(501).end();
        }
      );
      user = await User.findById(id);
      user = JSON.parse(JSON.stringify(user));
      delete user.password;

      res.status(200).send({ user, token: jwt.sign(user, TOKEN_SECRET_KEY), result: true });
    } else {
      res.status(404).end();
    }
  } catch (e) {
    console.log(e);
    res.status(501).end();
  }
});

// Update User Password
router.put("/api/update-user-password", async (req, res) => {
  try {
    const id = req.user._id;

    const { oldPassword, newPassword, confirmNewPassword } = req.body;

    let user = await User.findById(id);

    if (!user.validatePassword(oldPassword)) {
      return res.status(200).send({ oldPassword: true });
    }

    if (newPassword !== confirmNewPassword) {
      return res.status(200).send({ currentPasswords: true });
    }
  
    if (user) {
      await User.findByIdAndUpdate(id, { $set: { password: newPassword } }, { new: true });
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (e) {
    console.log(e);
    res.status(501).end();
  }
});

// Send instruction to restore password on email
router.post("/api/send-email-restore-password", async (req, res) => {
  try {
    const _email = req.body.email;
    let user = await User.findOne({ email: _email });
    if (user) {
      user = JSON.parse(JSON.stringify(user));
      delete user.password;
      const token = jwt.sign(user, SECRET_KEY_FOR_PASSWORD);
      const newToken = new tokenPasswordRecovery({
        token,
      });
      await newToken.save();

      const url = baseURL + "restore-password" + `/${token}`;
      const letter = {
        from: "lotostoii@gmail.com",
        to: _email,
        subject: "Oтправка почты",
        text: `Go to - ${url} to restore password`,
      };

      email.sendMail(letter, function (error, info) {
        if (error) {
          console.log(error);
          return res.status(409).end();
        } else {
          console.log("Email sent successfully: " + info.response);
          return res.status(200).json({ result: true });
        }
      });
    } else {
      res.status(200).json({ result: false });
    }
  } catch (e) {
    console.log(e);
    res.status(501).end();
  }
});

// check token for recovery password
router.post("/api/is-token-restore-password/:token", async (req, res) => {
  try {
    const newToken = req.params.token;
    let tokenPassword = await tokenPasswordRecovery.findOne({ token: newToken });
    let token = tokenPassword && "token" in tokenPassword ? tokenPassword.token : null;
    if (token) {
      let user = null;
      jwt.verify(token, SECRET_KEY_FOR_PASSWORD, (err, data) => {
        if (err) return res.status(200).json({ result: false, token: null });
        user = data;
      });

      token = jwt.sign(user, SECRET_KEY_FOR_PASSWORD);
      const newToken = new tokenPasswordRecovery({
        token,
      });

      await newToken.save();
      return res.status(200).json({ result: true, token });
    }
    res.status(200).json({ result: false, token: null });
  } catch (e) {
    console.log(e);
    res.status(501).end();
  }
});

// change password
router.put("/api/change-password", async (req, res) => {
  try {
    const newToken = req.body.token;
    const newPasword = req.body.password;
    let tokenPassword = await tokenPasswordRecovery.findOne({ token: newToken });
    let token = tokenPassword && "token" in tokenPassword ? tokenPassword.token : null;
    if (token) {
      let user = null;
      jwt.verify(token, SECRET_KEY_FOR_PASSWORD, (err, data) => {
        if (err) return res.status(200).json({ result: false, token: null });
        user = data;
      });
      const id = user._id;

      await User.findByIdAndUpdate(id, { $set: { password: newPasword } }, { new: true });
      return res.status(200).json({ result: true });
    }
    res.status(200).json({ result: false });
  } catch (e) {
    console.log(e);
    res.status(501).end();
  }
});
// Log in
router.post("/api/log-in", async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(200).json({ reasult: false });
    }

    if (!user.validatePassword(req.body.password)) {
      return res.status(200).json({ result: false });
    }

    user = JSON.parse(JSON.stringify(user));
    delete user.password;

    res.status(200).json({ user, result: true, token: jwt.sign(user, TOKEN_SECRET_KEY) });
  } catch (e) {
    console.log(e);
    res.status(501).end();
  }
});

router.post("/api/activate", async (req, res) => {
  try {
    const id = req.body.id;
    let user = await User.findById(id);

    if (user) {
      await User.findByIdAndUpdate(id, { $set: { isTemporary: false } }, { new: true });
      res.status(200).end();
    } else {
      res.status(404).end();
    }
    res.status(200).end();
  } catch (e) {
    console.log(e);
    res.status(501).end();
  }
});

router.post("/api/registration", async (req, res) => {
  try {
    const { password1, password2, currentURL, ...user } = req.body;

    const isUser = await User.findOne({ email: req.body.email });

    if (!isUser) {
      const { password_1, password_2, ...user } = req.body;
      const newUser = new User({
        ...user,
        password: password_1,
        role: null,
        gender: null,
        surname: "",
      });
      await newUser.save();
      const url = baseURL + currentURL + `/?id=${newUser._id}`;
      const letter = {
        from: "lotostoii@gmail.com",
        to: req.body.email,
        subject: "Oтправка почты",
        text: `Link for activate your account - ${url}`,
      };

      email.sendMail(letter, function (error, info) {
        if (error) {
          console.log(error);
          res.status(409).end();
        } else {
          console.log("Email sent successfully: " + info.response);
          res.status(200).send({ result: true });
        }
      });
    } else {
      res.status(409).end();
    }
  } catch (e) {
    console.log(e);
    res.status(501).end();
  }
});

router.delete("/api/remove-user", async (req, res) => {
  try {
    const user = await User.deleteOne({ _id: req.user._id });
    if (user) {
      res.status(200).send({ result: true });
    } else {
      res.status(501).send({ result: false });
    }
  } catch (e) {
    console.error(e);
    res.status(501).send({ result: false });
  }
});

module.exports = router;
