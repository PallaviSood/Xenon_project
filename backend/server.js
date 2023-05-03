import Express from "express";
import env from "dotenv";
import "./connection/database.js";
import signupdata from "./Modal/signupSchema.js";
import bcrypt from "bcrypt";
import cors from "cors";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

const app = Express();

app.use(Express.text());
app.use(cookieParser());
app.use(Express.json());

app.use(Express.urlencoded({ extended: true }));
app.use(cors());

env.config();
const port = 4000;

// Signup api
app.post("/signup", async (req, res) => {
  let { email, password } = req.body;
  let salt = await bcrypt.genSalt(10);
  let hash = await bcrypt.hash(password, salt);

  const user = await signupdata.findOne({ email });
  if (user) {
    res.send("user already exist", 200);
  } else {
    await signupdata
      .create({
        email: email,
        password: hash,
      })
      .then(() => {
        res.status(200);
        res.send("User Signuped succesfully");
      })
      .catch((err) => {
        console.log("" + err);
        res.status(200);
        res.send("check email and password");
      });
  }
});

// Login Api
app.post("/login", async (req, res) => {
  let { email, password } = req.body;
  const user = await signupdata.findOne({ email });
  if (!user) {
    res.send("user not found");
  } else {
    if (!password) {
      res.send("check password");
    } else {
      let check = await bcrypt.compare(password, user.password);
      if (check) {
        let token = await jwt.sign(
          { email_id: user.email },
          process.env.SECRET_KEY,
          { expiresIn: "2d" }
        );
        console.log(token);
        let sendOnlydata = {
          email: user.email,
          id: user._id,
        };
        res.send({ sendOnlydata, token });
      } else {
        res.send("Bad Credentials");
      }
    }
  }
});

//check User
app.post("/checkUser", async (req, res) => {
  try {
    const token = await req.body;
    let verify = jwt.verify(token.cookie, process.env.SECRET_KEY);
    res.send(verify);
  } catch (err) {
    res.send(err);
  }
});

//Upload video to cloud

app.listen(port, () => {
  console.log("listing on port " + port);
});
