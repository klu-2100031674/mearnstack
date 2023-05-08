const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const bcrypt = require("bcryptjs");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
const PORT = process.env.PORT||8081
const { MongoClient } = require('mongodb');

const jwt = require("jsonwebtoken");
var nodemailer = require("nodemailer");

const JWT_SECRET =
  "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";

const mongoUrl =
  "mongodb+srv://admin:mjsramesh@cluster0.s5hvgjn.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

require("./userDetails");
require("./feedBack");
require("./artist");
require("./events");
const client = new MongoClient(mongoUrl);
client.connect();
var db = client.db("test");
var col = db.collection("UserInfo");

const User = mongoose.model("UserInfo");
const FeedBack = mongoose.model("FeedBack")
const Artist = mongoose.model("Artists")
const Events = mongoose.model("Events");
app.post("/register", async (req, res) => {
  const { fname, lname, email, password, userType } = req.body;
  const mobilenumber = "";
  const image="";

  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      console.log(oldUser);
      return res.json({ error: "User Exists" });
    }
    await User.create({
      fname,
      lname,
      email,
      password: encryptedPassword,
      mobilenumber,
      userType,
      image,
      
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});
app.patch('/update', async (req, res) => {
  const { name, email, mobile,base64 } = req.body;
  console.log(req.body)
  const doc = {
    $set: { fname: name, mobilenumber: mobile,image:base64}
  }
  try {
    const result = await User.updateOne({ email }, doc);
    res.send({ "Data_Status": "update successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ "Data_Status": "update failed" });
  }
});


app.post("/feedback", async (req,res) => {
  const { name,  email, message} = req.body;
try{
    await FeedBack.create({
      name,
      email,
      message,
    });
    res.send({ status: "ok" });
    
  } catch (error) {
    res.send({ status: "error" });
  }
});


app.post("/addartist", async (req,res) => {
  const { name,  role, dec,image} = req.body;
try{
    await Artist.create({
      name,
      role,
      dec,
      image,
    });
    res.send({ status: "ok" });
    
  } catch (error) {
    res.send({ status: "error" });
  }
});

app.post("/login-user", async (req, res) => {
  const { email, password } = req.body;

  const user = await col.findOne({ email });
  if (user===null) {
    return res.json({ error: "User Not found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, JWT_SECRET, {
      expiresIn: "10m",
    });

    if (res.status(201)) {
      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "error", error: "Invalid Password" });
});

app.post("/userData", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET, (err, res) => {
      if (err) {
        return "token expired";
      }
      return res;
    });
    console.log(user);
    if (user == "token expired") {
      return res.send({ status: "error", data: "token expired" });
    }

    const useremail = user.email;
    col
    .findOne({ email: useremail })
      .then((data) => {
        res.send({ status: "ok", data: data });
      })
      .catch((error) => {
        res.send({ status: "error", data: error });
      });
  } catch (error) {}
});

app.listen(5000, () => {
  console.log("Server Started");
});

app.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  console.log({ email });
  try {
    const oldUser = await col.findOne({ email });
    if (oldUser === null) {
      return res.json({ status: "User Not Exists!!" });
    }
    const secret = JWT_SECRET + oldUser.password;
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "100m",
    });
    const link = `https://entertainmentklu.netlify.app/reset-password/${oldUser._id}/${token}`;
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "mattajithendra07@gmail.com",
        pass: "owklcznwrnkbxcys",
      },
    });

    var mailOptions = {
      from: "mattajithendra07@gmail.com",
      to: email, // Use email provided in the request instead of hardcoded value
      subject: "Password Reset",
      text: link,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
        return res.json({status:'Password reset link set to your gmail account'})
      }
    });
    console.log(link);
  } catch (error) {}
});


app.get("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  console.log(req.params);
  const oldUser = await User.findOne({ _id: id });
  if (oldUser===null) {
    return res.json({ status: "User Not Exists!!" });
  }
  const secret = JWT_SECRET + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    res.render("index", { email: verify.email, status: "Not Verified" });
  } catch (error) {
    console.log(error);
    res.send("Not Verified");
  }
});

app.post("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;

  const oldUser = await User.findOne({ _id: id });
  if (oldUser===null) {
    return res.json({ status: "User Not Exists!!" });
  }
  const secret = JWT_SECRET + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    const encryptedPassword = await bcrypt.hash(password, 10);
    await User.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          password: encryptedPassword,
        },
      }
    );
    res.render("index", { email: verify.email, status: "verified" });
  } catch (error) {
    console.log(error);
    res.json({ status: "Something Went Wrong" });
  }
});

app.get("/getAllUser", async (req, res) => {
  try {
    const allUser = await User.find({});
    res.send(allUser);
  } catch (error) {
    console.log(error);
  }
});
app.get("/getAllartist", async (req, res) => {
  try {
    const allUser = await Artist.find({});
    res.send(allUser);
  } catch (error) {
    console.log(error);
  }
});
app.get("/getAllevents", async (req, res) => {
  try {
    const allUser = await Events.find({});
    res.send(allUser);
  } catch (error) {
    console.log(error);
  }
});
app.post("/addevents", async (req,res) => {
  const {date,year,day,country,eventname}=req.body;
  var id =0;
try{
  results = await Events.aggregate([{ $group: { _id: null, maxId: { $max: "$id" } } }])
   id=results[0].maxId+1;
  console.log(id);
    await Events.create({
      id,
      date,
      year,
      day,
      country,
      eventname,
    });
    res.send({ status: "ok" });
    
  } catch (error) {
    res.send({ status: error });
  }
});
app.get("/allfeedback",async (req,res)=>{ try {
  const allUser = await FeedBack.find({});
  res.send(allUser);
} catch (error) {
  console.log(error);
}


})

app.post("/deleteUser", async (req, res) => {
  const { userid } = req.body;
  try {
    User.deleteOne({ _id: userid }, function (err, res) {
      console.log(err);
    });
    res.send({ status: "Ok", data: "Deleted" });
  } catch (error) {
    console.log(error);
  }
});
app.post("/deleteartist", async (req, res) => {
  const { userid } = req.body;
  try {
    Artist.deleteOne({ _id: userid }, function (err, res) {
      console.log(err);
    });
    res.send({ status: "Ok", data: "Deleted" });
  } catch (error) {
    console.log(error);
  }
});
