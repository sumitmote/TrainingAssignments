import express from "express";
import fs from "fs";

const app = express();
const PORT = 8080;
app.use(express.json());

// GET ALL USERS
app.get("/api/users", (req, res) => {
  const students = getUserDetails();
  res.send(students);
});

//POST : Insert New Detail of User
app.post("/api/users", (req, res) => {
  //get the existing user data
  const currentUsers = getUserDetails();

  //get the new user data from post request
  const userDetail = req.body;
  //check if the userData fields are missing
  if (
    userDetail.id == null ||
    userDetail.name == null ||
    userDetail.password == null ||
    userDetail.gender == null ||
    userDetail.birthdate == null ||
    userDetail.age == null ||
    userDetail.country == null ||
    userDetail.phone == null
  ) {
    return res.status(401).send({
      error: true,
      msg: "Please Enter All Required Data : Some Data Is Missing",
    });
  }

  //check id already exist or not
  const existflag = currentUsers.find((user) => user.id === userDetail.id);
  if (existflag) {
    return res.status(409).send({
      error: true,
      msg: "User already exist with this Id, Please try with another ID",
    });
  }
  //append the user data
  currentUsers.push(userDetail);
  //save user detail in json
  saveUserDetails(currentUsers);
  res.send({ success: true, msg: "User added succesffully" });
});

//Get specific user with id which sent by user.
app.get("/api/users/:id", (req, res) => {
  //from url fetch id.
  let id = parseInt(req.params.id);

  //get the details which want to update
  let userDetail = req.body;

  let CurrentUsers = getUserDetails();

  //Check user id exist or not
  let isExist = CurrentUsers.find((user) => parseInt(user.id) === id);
  if (!isExist) {
    return res.status(409).send({ error: true, msg: "user id does not exist" });
  }
  //filter out the userdetails
  const exactuser = CurrentUsers.filter((user) => user.id == id);
  res.send(exactuser);
});

//Update User Details on the basis of ID
app.put("/api/users/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let CurrentUsers = getUserDetails();

  const index = CurrentUsers.findIndex((user) => {
    return Number.parseInt(user.id) == id;
  });

  const updated = CurrentUsers.filter((user) => parseInt(user.id) !== id);

  if (index >= 0) {
    var uname = req.body.name;
    var password = req.body.password;
    var gender = req.body.gender;
    var birthdate = req.body.birthdate;
    var age = req.body.age;
    var country = req.body.country;
    var phone = req.body.phone;

    let usr = CurrentUsers[index];
    usr.id = parseInt(req.params.id);
    usr.name = uname;
    usr.password = password;
    usr.gender = gender;
    usr.birthdate = birthdate;
    usr.age = age;
    usr.country = country;
    usr.phone = phone;
    updated.push(usr);

    //save it in json
    saveUserDetails(updated);
    res.send({ success: true, msg: "User Details Updated Successfully" });
  } else {
    res.send({ error: true, msg: "User id does not exist" });
  }
});

app.delete("/api/users/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const currentUsers = getUserDetails();

  let filterUser = currentUsers.filter((user) => parseInt(user.id) !== id);

  if (currentUsers.length === filterUser.length) {
    return res.status(409).send({ error: true, msg: "UserID does not exist" });
  }
  //save the filtered data
  saveUserDetails(filterUser);
  res.send({ success: true, msg: "User Removed" });
});

app.listen(PORT, () =>
  console.log(`Server Running the port: http://localhost:${PORT}`)
);

/* Functions are Below ---------------------------------------------------*/

//Below function will fetch the all current user record from the users.json file.
const getUserDetails = () => {
  const jsonData = fs.readFileSync("users.json");
  return JSON.parse(jsonData);
};

//Saving user Data json file
const saveUserDetails = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync("users.json", stringifyData);
};
