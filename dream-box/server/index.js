require("module-alias/register");

const PORT = process.env.NODE_PORT || 3888;
const isDevelopment = process.env.NODE_ENV === "development";
const TOKEN_SECRET_KEY = require("@c/secret");
const path = require("path");

const jwt = require("jsonwebtoken");

const express = require("express");
const app = express();

const connectToMongoDb = require("./src/lib/connectDb");
const configDb = require("./src/config/DB");

const authRout = require("./src/routes/auth");

const history = require("connect-history-api-fallback");

// need only in production

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/api/files/:img", (req, res) => {
  res.sendFile(path.join(__dirname, "files", req.params.img));
});

app.use("**", (req, res, next) => {
  const { token } = req.headers;
  if (token) {
    jwt.verify(token, TOKEN_SECRET_KEY, (err, data) => {
      if (err) return next();
      req.user = data;
      next();
    });
  } else {
    next();
  }
});

app.use("/", authRout);

if (!isDevelopment) {
  app.use(history());
  app.use(express.static(path.join(__dirname, "../dist")));
}

connectToMongoDb(configDb, () =>
  app.listen(PORT, () => console.log(`Server has been started on - http://localhost:${PORT}`))
);
